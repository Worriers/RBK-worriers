const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('comment', function () {
  it('Should get All comment', function (done) {
    request(app)
      .get('/api/comment/')
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
  
it('Should creat Comment', function (done) {
    request(app)
      .post('/api/comment/')
      .send({
        name: 'dan',
        text: 'hii'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
         // console.log(resp.body.username)
        if (err) {
          console.log(err)
        }

        let comment = resp.body
           // console.log("hhhhh",q.name,q._id)
        // /console.log(resp.body)
        request(app)
          .get('/api/comment/')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(comment.name).to.equal('dan')
            done()
          })
      })
     // done()
  })
})