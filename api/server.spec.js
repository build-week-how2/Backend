const request = require("supertest");
const server = require("./server.js")

describe("server.js", () => {
    it("should be the testing environment", () => {
        expect(process.env.DB_ENV).toBe("testing")
    })

    describe('GET /', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });
    })

    describe('GET /:id', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).get('/:id');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).get('/:id');
            expect(res.type).toBe('application/json');
        });
    }) 

    describe('GET /:id/methods', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).get('/:id/methods');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).get('/:id/methods');
            expect(res.type).toBe('application/json');
        });
    }) 

    describe('POST /', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).post('/');
            expect(res.status).toBe(201);
        });

        it('should return a json object', async () => {
            const res = await request(server).post('/');
            expect(res.type).toBe('application/json');
        });
    }) 

    describe('PUT /:id', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).put('/:id');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).put('/:id');
            expect(res.type).toBe('application/json');
        });
    }) 

    describe('DELETE /:id', () => {
        it('should return 200 ok',  async () => {
            const res = await request(server).delete('/:id');
            expect(res.status).toBe(200);
        });

        it('should return a json object', async () => {
            const res = await request(server).delete('/:id');
            expect(res.type).toBe('application/json');
        });
    }) 
})