import { Hono } from 'hono';
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



export default app
