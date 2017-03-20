import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';
import { AdminService } from '../shared/admin.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
  providers: [AdminService, Modal, Overlay]
})
export class AdminLoginComponent implements OnInit {
  constructor(private adminService : AdminService, private router: Router, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) { 
    overlay.defaultViewContainer = vcRef;
  }
  ngOnInit() {

  }

  onSubmit(data: NgForm) {
    console.log('batonata',data.value);
    this.adminService.login(data.value).then((res) => {
      if(res.status==='valid'){
        this.router.navigate(["/admin"]);
      } else {
        this.modal.alert()
        .title('sorry!')
        .body(res.status)
        .open();
      }
    });
  }

}
