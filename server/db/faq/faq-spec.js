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
  
it('Should creat Quastion', function (done) {
    request(app)
      .post('/api/faq/')
      .send({
        name: 'aaa',
        text: 'ppp'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
         // console.log(resp.body.username)
        if (err) {
          console.log(err)
        }

        let q = resp.body
           // console.log("hhhhh",q.name,q._id)
        // /console.log(resp.body)
        request(app)
          .get('/api/faq/'+resp.body._id)
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(q.name).to.equal('aaa')
            done()
          })
      })
  })

  it('Should delete Quastion', function (done) {
    request(app)
    .get('/api/faq/')
    .set('ok', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err)
      }
      var id=resp.body[resp.body.length-1]._id
      console.log(id)
      request(app)
      .delete('/api/faq/')
      .send({
       _id : id,
     })
      .set('ok', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        console.log(resp.body)
        done()
      })  
    })
  })
})