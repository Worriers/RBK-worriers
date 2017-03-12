const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('achievments', function () {
  it('Should get all achievments', function (done) {
    request(app)
      .get('/api/projects/')
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
  
it('Should post project', function (done) {
    request(app)
      .post('/api/projects/')
      .send({
        title: 'Test movie3',
        url: 'ppp',
        deployLink: "uu",
        gitHubLink: "ll",
        img:"8" 
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end(function (err, resp) {
         // console.log(resp.body)
        if (err) {
          console.log(err)
        }

        let project = resp.body
            // console.log("hhhhh",project.title)
        // console.log(resp.body)
        request(app)
          .get('/api/projects/')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(project.title).to.equal('Test movie3')
            done()
          })
      })
     // done()
  })

})