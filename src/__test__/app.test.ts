import { Server } from "../config/Server";
import request from "supertest"


describe("supertest test", () => {
    test("GET /", async () => {
        const app = new Server("3000")
        app._app.listen('3000')

        const res = await request(app._app)
            .get("/")
            
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({message: 'Is Usable'})
    })

    test("POST /", async () => {
        const app = new Server("3000")

        const res = await request(app._app)
            .post("/")
            .send({'firstName': "jonh"})
            .set('Accept', 'application/json')
            .type('form')

            
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({message: 'User is Created'})
    })

    test("POST with no params /", async () => {
        const app = new Server("3000")

        const res = await request(app._app)
            .post("/")
            .send({'lastName': "sas"})
            .type('form')

            
        expect(res.statusCode).toEqual(400);
        //expect(res.body).toEqual({ "message": 'You need to pass a first name' })
    })

})
