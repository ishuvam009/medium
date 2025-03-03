import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify,sign } from "hono/jwt";
import { Hono } from "hono"

interface Env{
    DATABASE_URL: string,
    JWT_SECRET: string,
}

export const blogRouter = new Hono<{Bindings: Env}>();

blogRouter.use('api/v1/blog/*', async (c,next) =>{
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
});

blogRouter.get('/api/v1/blog/:id',(c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text('get blog route')
})
  
blogRouter.post('api/v1/blog',(c) =>{
    return c.text('signin route')
})
  
blogRouter.put('api/v1/blog',(c) =>{
    return c.text('signin route')
})