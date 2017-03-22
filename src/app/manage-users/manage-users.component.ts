import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { GradsService } from '../shared/grads.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [AdminService, GradsService]
})
export class ManageUsersComponent implements OnInit {

  grads : any[] = [];
  error : string;

  allGrads : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private gradsService : GradsService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
    this.getNotActivatedUsers();
  }

  getNotActivatedUsers() : any {
  	this.admin.getNotActivatedUsers().then(data => {
  		if (data.error){
  			this.error = data.error;
  		} else {
			  this.grads = data;
  		}
  	});

    this.gradsService.getGrads().then(data => {
      if (data.error){
        this.errorAll = data.error;
      } else {
      this.allGrads = data;
      }
    });
  }

  approveUser(id) : any {
  	this.admin.approveUser(id).then(data => {
  		if (data.error){
  			alert(data.error.message);
  		} else {
  			alert('User Has been approved!');
  			this.getNotActivatedUsers();
  		}
  	});
  }

  deleteUser(id) : any {
  	this.admin.deleteUser(id).then(data => {
  		if (data.error){
  			alert(data.error.message);
  		} else {
  			alert('User Has been deleted!');
  		}
  		this.getNotActivatedUsers();
  	});
  }

}
