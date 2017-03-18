const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('users', function () {
  it('Should get all users', function (done) {
    request(app)
    .get('/api/profile/')
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
  
  it('Should get one user', function (done) {
    request(app)
    .get('/api/profile/?semo94')
    .set('Accept', 'application/json')
    .end(function (err, resp) {
      if (err) {
        console.log(err)
      }
      expect(resp.body[0].username).to.equal('semo94');
      done()
    })
  })

  it('Delete one user', function (done) {
    request(app)
    .delete('/api/profile/')
    .send({_id: '16870091'})
    .set('ok', 'application/json')
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      request(app)
      .get('/api/profile/?semo94')
      .set('ok', 'application/json')
      .expect('Content-Type', /json/)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        expect(resp.body).to.be.empty;
        done()
      })
    })
  })
})