import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class SignupResolve implements Resolve<any> {

  constructor(private auth : AuthService, private router : Router) { }

  resolve() {
    return this.auth.getGitHubData().then(data => {
    	if (data.completed){
    		if (data.activated){
    			this.router.navigate([('/warriors/' + data.username)]);
    		} else {
    			this.router.navigate([('/')]);
    			alert('Oh! our admin is working on activating your account, Thank you for your patience!');
    		}
    	} else {
			return data;
    	}
    });
  }
}