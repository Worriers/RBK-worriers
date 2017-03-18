const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('gallery', function () {
  it('Should get all images', function (done) {
    request(app)
      .get('/api/gallery/')
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
  
it('Should create a new image', function (done) {
    request(app)
      .post('/api/gallery/')
      .send({
        img:{
          data:"kk",
         contentType: "jjjj"
        }
      })
      .set('ok', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        request(app)
        .get('/api/gallery/')
        .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
         // console.log("hhhhh",resp.body)
        expect(resp.body[0].img.contentType).to.equal('jjjj')
        done()
      })
  })

})
it('Should delete image', function (done) {
    request(app)
      .delete('/api/gallery/')
      .send({
         _id : "58c905630dc9b31be4340dc1",
      })
      .set('ok', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          console.log(err)
        }
        done()
      })
  })

})