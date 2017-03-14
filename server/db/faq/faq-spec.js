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
          .get('/api/faq/:id')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(q.name).to.equal('aaa')
            done()
          })
      })
     // done()
  })
  // it('Should get one Quastion', function (done) {
  //       request(app)
  //         .get('/api/faq/:id')
  //         .set('Accept', 'application/json')
  //         .expect('Content-Type', /json/)
  //         .expect(200)
  //         .end(function (err, resp) {
  //           if (err) {
  //             throw new Error(err)
  //           }
  //           expect(resp.body[1].name).to.equal('aaa')
  //           expect(resp.body[1].text).to.equal('ppp')
  //           // expect(q._).to.equal()
  //           done()
  //         })
  //     })
})