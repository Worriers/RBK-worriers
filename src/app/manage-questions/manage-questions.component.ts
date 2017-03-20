import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-manage-questions',
  templateUrl: './manage-questions.component.html',
  styleUrls: ['./manage-questions.component.css'],
  providers: [AdminService]
})
export class ManageQuestionsComponent implements OnInit {
  questions : any[] = [];
  error : string;

  constructor(private admin : AdminService) { }

  ngOnInit() {
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
}
