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

  user = {username: "montaser", email:"a@a.com", name:"Montaser Rahmani"};

  ngOnInit() {
  	this.auth.getGitHubData().then(data => {
  		this.user = data
  		console.log("from signupppppppp", data);
  	});
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
