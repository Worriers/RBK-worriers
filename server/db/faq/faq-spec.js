const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('faq', function () {
  it('Should get All Quastions', function (done) {
    request(app)
      .get('/api/faq/')
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
  
it('Should post user', function (done) {
    request(app)
      .post('/api/faq/')
      .send({
        name: 'aaa',
        text: 'ppp',
        
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201
        )
      .end(function (err, resp) {
         console.log(resp.body.username)
        if (err) {
          console.log(err)
        }

        let user = resp.body
             console.log("hhhhh",user.username)
        // /console.log(resp.body)
        request(app)
          .get('/api/users/')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(user.username).to.equal('aaa')
            done()
          })
      })
     // done()
  })
  it('Should get one user', function (done) {
    request(app)
      .post('/api/users/:id')
      .send({
        id: '1234'
      })
      .set('Accept', 'application/json')
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        console.log("hhhhh",resp.body.id)
        let user = resp.body
        console.log("hhhhh",user.id)
        request(app)
          .get('/api/users/:id' + user.id)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(user.id).to.equal('1234')
            done()
          })
      })
      // done()
  })
})