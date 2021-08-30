const e = require('express');
const { it } = require('mocha');
const request = require('supertest')

const app = require('../src/app')

describe('GET /products', () => {
    it('Teste contendo todos os produtos', done => {
        request(app)
            .get('/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
})

describe('/GET /products/:id', () => {
    it('Testando com produto especifico', (done) => {
        request(app)
            .get('/products/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect('"SSD Kingston"')
            .expect(200, done)
            
    })
})

describe('/POST /products', () => {
    it('Testando criar produto', (done) => {
        
        const data = {
            id: '2',
            nome: 'Mouse Gamer'
        }
        const datavazia = {}

        request(app)
            .post('/products')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done)
    })
})

