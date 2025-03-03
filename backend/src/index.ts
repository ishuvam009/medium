import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign,verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

interface Env {
  DATABASE_URL: string;
  JWT_SECRET: string;
}

const app = new Hono<{Bindings: Env}>();


  //addrd routing

  app.route("api/v1/user", userRouter);
  app.route("api/v1/blog", blogRouter);

app.use('api/v1/blog/*', async (c,next) =>{
  //get header
  //verify the header
  //if the g=header is correct then proceed
  //if not then return a 403 status code

  const header = c.req.header("authorization") || "";
  const response = await verify(header, c.env.JWT_SECRET);
  if(response.id){
    next();
  }
    else{
      c.status(403)
      return c.json({error:"unauthorized"})
    }
})

app.post('/api/v1/signup', async (c) => {
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



app.post('/api/v1/signin',async (c) => {

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
})



app.get('/api/v1/blog/:id',(c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text('get blog route')
})

app.post('api/v1/blog',(c) =>{
  return c.text('signin route')
})

app.put('api/v1/blog',(c) =>{
  return c.text('signin route')
})


export default app
