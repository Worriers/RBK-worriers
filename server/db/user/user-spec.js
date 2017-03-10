const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('users', function () {
  it('Should get all users', function (done) {
    request(app)
      .get('/api/users/')
      .set('ok', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          throw new Error(err)
        }
        expect(resp.body).to.be.an('array')
        done()
      })
  })
  
})