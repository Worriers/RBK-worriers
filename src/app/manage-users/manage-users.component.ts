import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { GradsService } from '../shared/grads.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [AdminService, GradsService , Modal, Overlay ]
})
export class ManageUsersComponent implements OnInit {

  grads : any[] = [];
  error : string;

  allGrads : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private gradsService : GradsService, private router: Router ,vcRef: ViewContainerRef, overlay: Overlay, public modal: Modal) {
     overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {
    if(localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
    this.getNotActivatedUsers();
  }

  getNotActivatedUsers() : any {
  	this.admin.getNotActivatedUsers().then(data => {
  		if(data.error){
  			this.error = data.error;
  		} else {
			  this.grads = data;
  		}
  	});

    this.gradsService.getGrads().then(data => {
      if(data.error){
        this.errorAll = data.error;
      } else {
      this.allGrads = data;
      }
    });
  }

  approveUser(id) : any {
  	this.admin.approveUser(id).then(data => {
  		if(data.error){
  		  this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
      } else {
         this.modal.alert()
        .title("Great")
        .body("User Has been approved!")
        .open()
  			this.getNotActivatedUsers();
  		}
  	})
  }

  deleteUser(id) : any {
  	this.admin.deleteUser(id).then(data => {
  		if(data.error){
  		  this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
      } else {
         this.modal.alert()
        .title("Great")
        .body("User Has been deleted!")
        .open()
  		}
  		this.getNotActivatedUsers();
  	})
  }
  
}
