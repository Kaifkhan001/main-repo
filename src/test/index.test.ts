import { describe, it, expect } from "vitest";
import request from 'supertest';
import { app } from "..";


describe("For all sum test cases", () => {
    it("Should return the correct sum of number", async() => {
        const res = await request(app).post("/sum").send({
            a: 3,
            b: 4
        });

        expect(res.body.answer).toBe(7);
        expect(res.statusCode).toBe(200);
    });


    it("Should check for the error cases", async() => {
        const res = await request(app).post("/sum").send({
            a: ['dfdsssd']
        });


        expect(res.body.message).toBe("Invalid input");
        expect(res.statusCode).toBe(411);
    });
});


describe("For all multiply test cases", () => {
    it("Should return the correct multiply of numbers", async() => {
        const res = await request(app).post("/multiply").send({
            a: 5,
            b: 3
        });

        expect(res.body.answer).toBe(15);
        expect(res.statusCode).toBe(200);
    });

    it("Should check for the error cases",async () => {
        const res = await request(app).post("/multiply").send({
            a: ['dfgdjkfgn']
        });
        
        expect(res.body.message).toBe("Invalid input");
        expect(res.statusCode).toBe(411);

    })
});


describe("For all addition test cases", () => {
    it("Should return the correct addition of numbers", async() => {
        const res = await request(app).post("/addition").send({
            a: 5,
            b: 3
        });

        expect(res.body.answer).toBe(8);
        expect(res.statusCode).toBe(200);
    });

    it("Should check for the error cases",async () => {
        const res = await request(app).post("/addition").send({
            a: ['dfgdjkfgn']
        });
        
        expect(res.body.message).toBe("Invalid input");
        expect(res.statusCode).toBe(411);

    })
});


describe("For all subtraction test cases", () => {
    it("Should return the correct subtraction of numbers", async() => {
        const res = await request(app).post("/subtraction").send({
            a: 5,
            b: 3
        });

        expect(res.body.answer).toBe(2);
        expect(res.statusCode).toBe(200);
    });

    it("Should check for the error cases",async () => {
        const res = await request(app).post("/subtraction").send({
            a: ['dfgdjkfgn']
        });
        
        expect(res.body.message).toBe("Invalid input");
        expect(res.statusCode).toBe(411);

    })
});
