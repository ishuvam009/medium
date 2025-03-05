import { withAccelerate } from "@prisma/extension-accelerate";
import { verify,sign } from "hono/jwt";
import { Hono } from "hono"
import { PrismaClient } from "@prisma/client/edge";


export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string,
    }
}>();

//Blog middleware
blogRouter.use('/*', async (c,next) =>{
    //get header
    //verify the header
    //if the g=header is correct then proceed
    //if not then return a 401 status code
  
    const header = c.req.header("authorization") || "";
    const user = await verify(header,c.env.JWT_SECRET)

    if(user && typeof user.id === "string"){
        c.set("userId",user.id);
        await next();
    }else{
        c.status(401);
        return c.json({
            message: "You are not logged in",
        });
    };
});



//blogs routes

blogRouter.post('/post', async (c) =>{

    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId,
        }
    })

    return c.json({
        id: blog.id,
    })
});
  
blogRouter.put('/update',async (c) =>{

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.update({
        where: {
            id: body.id
        },

        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: blog.id,
    })
});

blogRouter.get('/mypost',async (c)=>{

    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: body.id,
            },
        })
        return c.json({
            blog
        })
    } catch (error) {
        c.status(204);
        return c.json({
            message: "Error in fetching the blog post",
        })
    }
});


//Implement a pagination here.


blogRouter.get('/bulk', async (c)=>{

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blog = await prisma.blog.findMany();

    return c.json({
        blog,
    })
});