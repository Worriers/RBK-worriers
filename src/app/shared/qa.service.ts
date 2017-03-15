import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QaService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	getQuestions(): Promise<Object[]> {
	return this.http.get("/api/faq", this.headers)
	           .toPromise()
	           .then(response => response.json())
	           .catch(this.handleError);
	}

	addComment(qText, comment): Promise<any> {
		comment.qText = qText;
	return this.http.post("/api/comment", comment, this.headers)
	           .toPromise()
	           .then(response => response)
	           .catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}