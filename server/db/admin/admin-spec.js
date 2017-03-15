const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('admin', function () {
  it('Should register a new admin', function (done) {
    request(app)
    .post('/api/register')
    .send({
      "username": "test",
      "password": "1234",
      "displayName": "not your business"
    })
    .set('ok', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      expect(resp.body).to.be.an('object');
      expect(resp.body).to.have.property('_id');
      done()
    })

  })
  
  it('Should let admin login', function (done) {
    request(app)
    .post('/api/login')
    .set('Accept', 'application/json')
    .send({
      "username": "test",
      "password": "1234"
    })
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function (err, resp) {
      if (err) {
        console.log(err)
      }
      expect(resp.body).to.be.an('object');
      expect(resp.body).to.have.property('status');
      done()
    })
  })
})