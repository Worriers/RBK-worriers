import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
	constructor(private http: Http) { }

	userData = {};

	private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

	// init(){
	// 	this.isAuth();
	// }

	isAuth() : Promise<Object[]> {
	return this.http.get("/api/isLogged", this.headers)
	           .toPromise()
	           .then(function(response){
	           		console.log("isAuth data -----", response.json().data);
	           		this.userData = response.json().data;
	           		return  response.json().data;
	           })
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
	
}