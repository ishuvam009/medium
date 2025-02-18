import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/si',(c) => {
  return c.text('Hi Si')
})

export default app
