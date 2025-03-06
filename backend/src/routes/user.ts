import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { userSignin, userSignup } from "@zedeye/zod-medium-common";

interface Env {
  DATABASE_URL: string;
  JWT_SECRET: string;
}

export const userRouter = new Hono<{ Bindings: Env }>();

userRouter.post("/signup", async (c) => {
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

    const { success } = userSignup.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs are not correct.",
      });
    }

    //Hased password
    const user = await prisma.user.create({
      data: {
        email: body.username,
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
    return c.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      500
    );
  }
});

userRouter.post("/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: c.env?.DATABASE_URL,
        },
      },
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = userSignin.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs are not correct",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(401);
      return c.json({
        message: "Either Uername or Password or both are incorrect",
      });
    }

    const token = await sign(
      { id: user.id, username: user.email, password: user.password },
      c.env.JWT_SECRET
    );

    return c.json({
      jwt_token: token,
    });
  } catch (error) {
    console.error("Error Occured", error);
    
    c.status(500);

    return c.json({
      error: error instanceof Error ? error.message : "Unknown error occurred"
    }) 
  }
});
