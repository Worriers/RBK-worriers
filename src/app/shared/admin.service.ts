import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});

  isAuth() : Promise<any> {
  return this.http.get("/api/admin/isLogged", this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  getAdminStats() : Promise<any> {
  return this.http.get("/api/adminStats", this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  login(data) : Promise<any> {
  return this.http.post("/api/login", data, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  logout() : Promise<any> {
  return this.http.get("/api/admin/logout", this.headers)
             .toPromise()
             .then(function(response){
                 return  response;
             })
             .catch(this.handleError);
  }

  getNotActivatedUsers() : Promise<any> {
  return this.http.get("/api/admin/users", this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  approveUser(id) : Promise<any> {
  return this.http.post("/api/admin/users/approve", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  deleteUser(id) : Promise<any> {
  return this.http.post("/api/admin/users/delete", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  getNotApprovedProjects() : Promise<any> {
  return this.http.get("/api/admin/projects", this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  approveProject(id) : Promise<any> {
  return this.http.post("/api/admin/projects/approve", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  deleteProject(id) : Promise<any> {
  return this.http.post("/api/admin/projects/delete", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  getNotApprovedQuestions() : Promise<any> {
  return this.http.get("/api/admin/questions", this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  approveQuestion(id) : Promise<any> {
  return this.http.post("/api/admin/questions/approve", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }

  deleteQuestion(id) : Promise<any> {
  return this.http.post("/api/admin/questions/delete", {id : id}, this.headers)
             .toPromise()
             .then(function(response){
                 return  response.json();
             })
             .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}