import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify,sign } from "hono/jwt";

interface Env{
    DATABASE_URL: string,
    JWT_SECRET: string,
}

export const userRouter = new Hono<{Bindings: Env}>();


userRouter.post('/signup', async (c) => {
    try {
      
      //PrismaClient instance with the Accelerate URL from env
      const prisma = new PrismaClient({
        datasources: {
          db: {
            url: c.env.DATABASE_URL,
          },
        },
      }).$extends(withAccelerate());
      
      const body = await c.req.json();
      
      //zod and hased password
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name,
        },
      });
      
      const token = await sign(
        { id: user.id, name: user.name, email: user.email }, 
        c.env.JWT_SECRET
      );
      
      return c.json({
        jwt_token: token,
      });
    } catch (error) {
      console.error("Error occurred:", error);
      
      // Error response
      return c.json({
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }, 500);
    }
  });
  
  
  
userRouter.post('/signin',async (c) => {
  
    const prisma =  new PrismaClient({
      datasources: {
        db:{
          url: c.env?.DATABASE_URL,
        }
      }
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      }
    })
  
    return c.text('signin route')
  });  