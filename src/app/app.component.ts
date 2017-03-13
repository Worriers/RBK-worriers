import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private auth : AuthService) {}
  signin(){
  	this.auth.signin().then(data => console.log("dataaaaa  ", data));
  }
}
