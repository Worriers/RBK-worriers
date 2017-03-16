import { Component, OnInit } from '@angular/core';
import { QaService } from '../shared/qa.service';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css'],
  providers:[ QaService ]
})
export class QaComponent implements OnInit {

	q : Object[] = [];

  constructor(private qaSevices : QaService) { }

  ngOnInit() {
  	this.getQuestions();
  }

  getQuestions() {
  	this.qaSevices.getQuestions().then((data) => this.q = data);
  }

newQ : any
str : String
text : String

  addQ(name , q ){
  	this.qaSevices.addQuestion({name : name , text : q}) ;
  }

  addC(qText , c) {
  	console.log({qText :qText , text : c })
 	// this.qaSevices.addComment({qText :qText , text : c });

  }


}
