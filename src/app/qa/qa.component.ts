import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {
	str : String
  constructor() {}

  ngOnInit() {
  }

  submit(s = String){
  	this.str = s;
  	console.log(this.str);
  }

}
