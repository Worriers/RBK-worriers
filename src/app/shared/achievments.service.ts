import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AchievmentsService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	addAch(a): Promise<any> {
		return this.http.post('/api/achievments', a, this.headers)
		.toPromise()
		.then(response => response)
		.catch(this.handleError);
	}

	deleteAch(id): Promise<any> {
	return this.http.delete('/api/achievments/' + id , this.headers)
	           .toPromise()
	           .then(response => response)
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}