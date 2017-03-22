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
  		// console.log(data);
  		this.userData = data;
  		if (data.id !== null){
  			localStorage.setItem('rbk.isLogged', 'true');
  			localStorage.setItem('rbk.userId', data.id);
        localStorage.setItem('rbk.type', data.type);
        localStorage.setItem('rbk.name' , data.username);
        if (data.type === 'user'){
        localStorage.setItem('rbk.cohort', data.cohort);
        }
  		} else {
        localStorage.removeItem('rbk.isLogged');
        localStorage.removeItem('rbk.userId');
        localStorage.removeItem('rbk.type');
        localStorage.removeItem('rbk.cohort');
      }
  	});
  }

  logout(){
  	this.auth.logout().then(data => {
  		if (data.status !== 200){
  			alert('OOPS! something went wrong please try again');
  		} else {
  			localStorage.removeItem('rbk.isLogged');
  			localStorage.removeItem('rbk.userId');
        this.userData = {id : null};
        if (localStorage.getItem('rbk.type') === 'user'){
          localStorage.removeItem('rbk.type');
          localStorage.removeItem('rbk.cohort');
          this.router.navigate([('/')]);
        } else{
          localStorage.removeItem('rbk.type');
          this.router.navigate([('/login')]);
        }
  		}
  	});
  }


}
