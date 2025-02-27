import { PrismaClient } from '@prisma/client';
import { Hono } from 'hono'
import { sign } from 'hono/jwt';

interface Env{
  DATABASE_URL: string;
  JWT_SECRET: string;
}

const app = new Hono<{Bindings:Env}>();

app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClient ({
    datasources: {
      db:{
        url: c.env.DATABASE_URL,
      },
    },
  });

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })

  const token = sign({id: user.id, name: user.name, email: user.email}, c.env.JWT_SECRET);

  return c.json({
    jwt_token : token,
  })
})

app.post('/api/v1/signin',(c) => {
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
