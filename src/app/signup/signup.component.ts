import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService, private route : ActivatedRoute, private router: Router) { }

  user = {};

  ngOnInit() {
  	// this.auth.getGitHubData().then(data => {
  	// 	this.user = data
  	// })
  	this.user = this.route.snapshot.data['gitHubData'];
  }

  completeProfile(){
  	this.auth.completeProfile(this.user).then(data => {
  		if (data.status !== 201){
  			alert('OOPS! something went wrong, please try again');
  		} else {
  			alert('Thank you for completing your profile, It won\'t take long until your account is activated! STAY TUNED!');
  			this.router.navigate(['/']);
  		}
  	});
  }

  // get diagnostic() { return JSON.stringify(this.user); }
}
