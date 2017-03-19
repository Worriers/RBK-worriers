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

	deleteImage(id): Promise<any> {
	return this.http.delete("/api/gallery/" + id ,this.headers)
	           .toPromise()
	           .then(response => response)
	           .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}
	
}