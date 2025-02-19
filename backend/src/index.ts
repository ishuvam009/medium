import { Hono } from 'hono'

const app = new Hono()

app.post('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('',(c) => {
  return c.text('')
})

app.get('',(c) => {
  return c.text('')
})

app.post('',(c) =>{
  return c.text('')
})

app.put('',(c) =>{
  return c.text('')
})


export default app
