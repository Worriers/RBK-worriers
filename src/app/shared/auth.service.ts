import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	isAuth() : Promise<any> {
	return this.http.get('/api/isLogged', this.headers)
	           .toPromise()
	           .then(function(response){
	           		// this.userData = response.json();
	           		// console.log("isAuth userData -----", response.json());
	           		return  response.json();
	           })
	           .catch(this.handleError);
	}

	getGitHubData() : Promise<any> {
	return this.http.get('/api/validate', this.headers)
	           .toPromise()
	           .then(function(response){
	           		return  response.json();
	           })
	           .catch(this.handleError);
	}

	completeProfile(data) : Promise<any> {
		console.log(JSON.stringify(data));
	return this.http.post('/api/profile', JSON.stringify(data), {headers: this.headers})
	           .toPromise()
	           .then(function(response){
	           		return  response;
	           })
	           .catch(this.handleError);
	}

	logout() : Promise<any> {
	return this.http.get('/api/logout', this.headers)
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