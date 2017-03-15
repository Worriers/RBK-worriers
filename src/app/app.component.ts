import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  userData;

  constructor(private auth : AuthService, private router : Router) {}

  ngOnInit(){
  	this.auth.isAuth().then(data => {
  		this.userData = data;
  		console.log("userdata in app", this.userData);
  	});
  }
  
  logout(){
  	this.auth.logout().then(data => {
  		if(data.status !== 200){
  			alert('OOPS! something went wrong please try again');
  		} else {
  			this.userData = {id : null};
  		}
  	})
  }
}
