import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { AdminService } from '../shared/admin.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [AdminService]
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService : AdminService, private router: Router) { }
  ngOnInit() {
    
  }

  onSubmit(data: NgForm) {
    console.log('batonata',data.value);
    this.adminService.login(data.value).then((res) => {
      if(res.status==='valid'){
      this.router.navigate(["/admin"]);
        
      } else {
        
        console.log(res);
      }
    });
  }

}
