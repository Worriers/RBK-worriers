import { Component, OnInit } from '@angular/core';
import { AchievmentsService } from '../shared/achievments.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.css'],
  providers:[ AchievmentsService ]
})
export class AchievmentsComponent implements OnInit {

  newAch : any = {} ; 
  constructor(private aServices : AchievmentsService, private router : Router) { }

  ngOnInit() {
  }

  insertData(){
  	this.newAch.id = localStorage.getItem('rbk.userId')
  	this.aServices.addAch(this.newAch) ; 
  	this.newAch = {};
  	alert("your achievment has been added")
     this.router.navigate([('/warriors/')]);
  }

}
