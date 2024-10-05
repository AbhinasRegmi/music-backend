import * as z from "zod";

export const userRegistrationSchemaZ = z.object({
    username: z.string().min(1, {
        message: "Username is required."
    }),
    email: z.string().email(),
    password: z.string().min(8),
    confirm_password: z.string().min(8)
}).superRefine(
    (values, ctx) => {
        if(values.password !== values.confirm_password){
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['confirm_password'],
                message: "Confirm password is not same as password"
            });

            return z.NEVER;
        }
    }
);

export const userLoginSchemaZ = z.object({
    email: z.string().min(1, {
        message: "Username is required."
    }),
    password: z.string().min(8),
});