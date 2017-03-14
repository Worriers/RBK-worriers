import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class SignupResolve implements Resolve<any> {

  constructor(private auth : AuthService, private router : Router) { }

  resolve() {
    return this.auth.getGitHubData().then(data => {
    	if(data.completed){
    		if(data.activated){
    			this.router.navigate([('/profile/'+data.username)]);
    		} else {
    			alert("Oh! our admin is working on activating your account, Thank you for your patience!")
    			this.router.navigate([('/')]);
    		}
    	} else {
			return data;
    	}
    });
  }
}