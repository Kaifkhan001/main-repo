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
})