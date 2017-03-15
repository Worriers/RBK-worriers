import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectsService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	getProjects(): Promise<Object[]> {
	return this.http.get("/api/projects", this.headers)
	           .toPromise()
	           .then(response => response.json())
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}