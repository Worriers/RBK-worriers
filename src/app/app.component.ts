import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  userData;

  constructor(private auth : AuthService) {}

  ngOnInit(){
  	// this.auth.isAuth().then(data => {
  	// 	this.userData = data;
  	// 	console.log(this.userData, data);
  	// });
  }
  
}
