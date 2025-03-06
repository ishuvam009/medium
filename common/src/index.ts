import z from 'zod';

export const userSignup = z.object({
    username: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6),
});


export const userSignin = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

export const createBlog = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
})

export type UserSinUp = z.infer<typeof userSignup>
export type UserSinIn = z.infer<typeof userSignin>
export type CreateBlog = z.infer<typeof createBlog>
export type UpdateBlog = z.infer<typeof updateBlog>