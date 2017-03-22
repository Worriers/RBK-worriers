const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect;


describe('achievments', function () {
  it('Should get all achievments', function (done) {
    request(app)
      .get('/api/achievments/')
      .set('ok', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          throw new Error(err);
        }
        expect(resp.body).to.be.an('array');
        done();
      });

  });
  
  it('Should creat achievments', function (done) {
    request(app)
      .post('/api/achievments/')
      .send({
        category: 'web app',
        url: 'www.aaa.com',
        desc: 'uu',
        date: 'll',
        name: 'DaniaHamdan'
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {

        if (err) {
          console.log(err);
        }

        let ach = resp.body;
        console.log(ach);
        request(app)
          .get('/api/achievments/')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err);
            }
            expect(ach.date).to.equal('ll');
            done();
          });
      });
  });

  it('Should delete achievment', function (done) {
    request(app)
    .get('/api/achievments/')
    .set('ok', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, resp) {
      if (err) {
        throw new Error(err);
      }
      var id = resp.body[resp.body.length - 1]._id;
      console.log(id);
      request(app)
      .delete('/api/achievments/')
      .send({
        _id: id,
      })
      .set('ok', 'application/json')
      // .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, resp) {
        if (err) {
          console.log(err);
        }
        console.log(resp.body);
        done();
      });  
    });
  }); 

});