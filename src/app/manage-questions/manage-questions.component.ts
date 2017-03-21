import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { QaService } from '../shared/qa.service';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css'],
  providers: [AdminService, QaService]
})
export class ManageQuestionsComponent implements OnInit {
  questions : any[] = [];
  error : string;

  allQuestions : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private router : Router, private qa : QaService) { }

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
  			alert(data.error.message);
  		} else {
  			alert("Question Has been approved!");
  			this.getNotApprovedQuestions();
  		}
  	})
  }

  deleteQuestion(id) : any {
  	this.admin.deleteQuestion(id).then(data => {
  		if(data.error){
  			alert(data.error.message);
  		} else {
  			alert("Question Has been deleted!");
  			this.getNotApprovedQuestions();
  		}
  	})
  }

  deleteComment(id) : any {
    this.admin.deleteComment(id).then(data => {
      if(data.error){
        alert(data.error.message);
      } else {
        alert("Comment Has been deleted!");
        this.getNotApprovedQuestions();
      }
    })
  }
}
