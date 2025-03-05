import z from 'zod';

export const userValidation = z.object({
    username: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(6),
});


//Type inference in zod.
export type UserValidation = z.infer<typeof userValidation>