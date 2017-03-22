import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { QaService } from '../shared/qa.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';
import { Router} from '@angular/router';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css'],
  providers:[ QaService, Modal, Overlay ]
})

export class QaComponent implements OnInit {

	q : Object[] = [];
	myVar : boolean = false ; 
	newEntry: any = {}; 
	newComment : any = {} ;
  constructor(private qaSevices : QaService,vcRef: ViewContainerRef, overlay: Overlay, public modal: Modal , private router : Router) {
    overlay.defaultViewContainer = vcRef }


    ngOnInit() {
      this.getQuestions();
    }

    getQuestions() {
      this.qaSevices.getQuestions().then((data) => {
        data.forEach(q => {
          q.show = false;
        })
        this.q = data;
      });
    }

    addQ(name , q ){
      if(name === undefined){
        name = "visitor"
      }
      this.qaSevices.addQuestion({name : name , text : q}) ;
      this.newEntry = {};
      this.getQuestions();
      this.modal.alert() 
      .title('Thanks for asking')
      .body("your question will be answered as soon as possible :)")
      .open();
  }

    addC(qText , c) {
      if(localStorage.getItem("rbk.isLogged")){
        this.router.navigate([('/')]);
        this.qaSevices.addComment({qText :qText , text : c });
        setTimeout(() => this.getQuestions() , 500);
        this.newComment = {} ;
      } else {
        this.modal.alert()
        .title('Ooopss')
        .body("Make sure you're logged in before adding this comment")
        .open()
        this.newComment = {} ;
      }
    }

}

