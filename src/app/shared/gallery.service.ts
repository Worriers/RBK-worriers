import { Injectable}    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GalleryService {
	constructor(private http: Http) { }

	private headers = new Headers({'Content-Type': 'application/json'});

	getImages(): Promise<Object[]> {
	return this.http.get("/api/gallery", this.headers)
	           .toPromise()
	           .then(response => response.json())
	           .catch(this.handleError);
	}

<<<<<<< HEAD:src/app/shared/gallery.service.ts
=======
	insertProject(p): Promise<any> {
	return this.http.post("/api/projects", p ,this.headers)
		       .toPromise()
		       .then(response => response)
		       .catch(this.handleError)
	}

>>>>>>> add project:src/app/shared/projects.service.ts
	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}