import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClinet({
    datasourceUrl: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  })
  return c.text('signup route')
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
