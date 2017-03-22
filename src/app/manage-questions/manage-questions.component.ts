import { Component, OnInit , ViewContainerRef} from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { QaService } from '../shared/qa.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css'],
  providers: [AdminService, QaService , Modal, Overlay ]
})
export class ManageQuestionsComponent implements OnInit {
  questions : any[] = [];
  error : string;

  allQuestions : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private router : Router, private qa : QaService ,vcRef: ViewContainerRef, overlay: Overlay, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
   }

  ngOnInit() {
    if(localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
    this.getNotApprovedQuestions();
  }

  getNotApprovedQuestions() : any {
  	this.admin.getNotApprovedQuestions().then(data => {
  		if(data.error){
  			this.error = data.error;
  		} else {
			  this.questions = data;
  		}
  	});

    this.qa.getQuestions().then(data => {
      if(data.error){
        this.errorAll = data.error;
      } else {
        this.allQuestions = data;
      }
    });

  }

  approveQuestion(id) : any {
  	this.admin.approveQuestion(id).then(data => {
  		if(data.error){
  			  this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
  		} else {
         this.modal.alert()
        .title("Great")
        .body("Question Has been approved!")
        .open()
  			this.getNotApprovedQuestions();
  		}
  	})
  }

  deleteQuestion(id) : any {
  	this.admin.deleteQuestion(id).then(data => {
  		if(data.error){
  			 this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
      } else {
         this.modal.alert()
        .title("Great")
        .body("Question Has been deleted!")
        .open()
  			this.getNotApprovedQuestions();
  		}
  	})
  }

  deleteComment(id) : any {
    this.admin.deleteComment(id).then(data => {
      if(data.error){
         this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
      } else {
         this.modal.alert()
        .title("Great")
        .body("Comment Has been deleted!")
        .open()
        this.getNotApprovedQuestions();
      }
    })
  }
}
