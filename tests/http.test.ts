import run from "../app";
import request from "supertest";
import { Server } from "http";

describe('http', () => {
    let server: Server
    beforeAll(() => {
        server = run(3003)
    })
    it('GET /admin', () => {
        return request(server)
            .get('/admin')
            .expect(200)
            .then(response => {
                expect(response.body.length).toEqual(11)
            })
    })
    afterAll(async () => {
        server.close()
    })
})