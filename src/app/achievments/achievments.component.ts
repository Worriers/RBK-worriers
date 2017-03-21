import { Component, OnInit } from '@angular/core';
import { AchievmentsService } from '../shared/achievments.service';
import { Router} from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.css'],
  providers:[ AchievmentsService ]
})
export class AchievmentsComponent implements OnInit {

  newAch : any = {} ; 
  constructor(private aServices : AchievmentsService, private router : Router, overlay: Overlay, public modal: Modal) { }

  ngOnInit() {
  }

  insertData(){
  	this.newAch.id = localStorage.getItem('rbk.userId')
  	this.aServices.addAch(this.newAch) ; 
  	this.newAch = {};
  	this.modal.alert() 
      .title('Great')
      .body("your achievment has been added to your profile :)")
      .open();
     this.router.navigate([('/warriors/'+ localStorage.getItem('rbk.name'))]);
  }

}
