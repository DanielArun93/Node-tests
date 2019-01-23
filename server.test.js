const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should send a response', (done) => {

            request(app)
                .get('/')
                .expect(200)
                .expect("Hello World!")
                .end(done)
        })
    })

    describe('GET /user', () => {
        it('should send a object', (done) => {

            request(app)
                .get('/user')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        "name": "Arun",
                        "age": 25
                    })
                })
                .end(done)
        })
    })

})
