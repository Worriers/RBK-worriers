const app = require('../../server.js');
const request = require('supertest');
const expect = require('chai').expect


describe('project', function () {
  it('Should get all projects', function (done) {
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
        title: 'Test ',
        url: 'ppp',
        gitHubLink: "ll",
        img:{
          data:"ss",
          contentType :"lll"
        }
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
        request(app)
          .get('/api/projects/')
          .end(function (err, resp) {
            if (err) {
              throw new Error(err)
            }
            expect(project.title).to.equal('Test ')
             // expect(project.img.data.data).to.equal('ss')
            expect(project.gitHubLink).to.equal('ll')
            expect(project.url).to.equal('ppp')
            done()
          })
      })
     // done()
  })

})