import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AuthService {
	constructor(private http: Http) { }

	gitHubData = new Subject<Object>();
	gitHubData$ = this.gitHubData.asObservable();
	
	private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

	signin(): Promise<Object[]> {
	return this.http.get("/auth/github", this.headers)
	           .toPromise()
	           .then(response => response.json().data)
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}