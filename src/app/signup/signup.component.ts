import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  user = {username: "montaser", email:"a@a.com", name:"Montaser Rahmani"};
  ngOnInit() {
  	
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
