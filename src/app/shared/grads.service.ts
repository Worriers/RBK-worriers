import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GradsService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	getGrads(): Promise<any> {
	return this.http.get('/api/profile', this.headers)
	           .toPromise()
	           .then(response => response.json())
	           .catch(this.handleError);
	}

	getProfile(params): Promise<any> {
	return this.http.get('/api/profile/' + params.user, this.headers)
	           .toPromise()
	           .then(response => response)
	           .catch(this.handleError);
	}

	 getGradList (id) : Promise<any> {
	 return this.http.get('/api/profile/cohort/' + id, this.headers)
	           .toPromise()
	           .then(response => response.json())
	           .catch(this.handleError);
	 }
	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}

}