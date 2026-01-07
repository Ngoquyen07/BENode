import {z} from 'zod' ;
const studentValidation =  z.object({
    name: z
        .string({required_error : "Name is required",})
        .min(2,"Name can't be shorter than 2 characters")
        .max(50,"Name can't be longer than 50 characters"),
})
export default studentValidation;