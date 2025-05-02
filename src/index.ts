import express from 'express';
import { z } from 'zod';

export const app = express();
app.use(express.json());

const inputType = z.object({
    a: z.coerce.number(),
    b: z.coerce.number()
});

//@ts-ignore
app.post('/sum', (req, res) => {
   const parsedValue = inputType.safeParse(req.body);

   if(!parsedValue.success){
    return res.status(411).json({
        message: "Invalid input"
    });
   }

   const { a , b } = parsedValue.data;
   const sum = a+b;

   res.json({
      answer: sum
   });

});

//@ts-ignore
app.post('/multiply', (req, res) => {
    const parsedValue = inputType.safeParse(req.body);

    if(!parsedValue.success){
        return res.status(411).json({
            message: "Invalid input"
        });
    };

    const { a , b } = parsedValue.data;
    const multiply = a*b;

    res.json({
        answer: multiply
    });
})