import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private auth : AuthService) { }

  user = {};

  ngOnInit() {
  	this.auth.getGitHubData().then(data => {
  		this.user = data
  		console.log("from signupppppppp", data);
  	});
  }

  completeProfile(){
  	this.auth.completeProfile(this.user).then(data => {
  		console.log(data);
  		if(data.status !== 201){
  			 console.log("shit happens dude!");
  		} else {
  			alert("Thank you for completing your profile, It won't take long until your account is activated! STAY TUNED!");
  		}
  	});
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
