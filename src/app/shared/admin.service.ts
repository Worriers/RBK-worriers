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

	logout() : Promise<any> {
	return this.http.get("/api/admin/logout", this.headers)
	           .toPromise()
	           .then(function(response){
	           		return  response;
	           })
	           .catch(this.handleError);
	}


	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
	
}