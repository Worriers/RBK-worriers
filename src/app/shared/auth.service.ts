import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
	constructor(private http: Http) { }

	gitHubData = {};
	gitHubData$ = this.gitHubData.asObservable();
	
	private headers = new Headers({'Content-Type': 'application/json'});

	signin(): Promise<Object[]> {
	return this.http.get("/api/signin", this.headers)
	           .toPromise()
	           .then(response => response.json().data)
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}