import { Component, OnInit } from '@angular/core';
import { GradsService } from '../shared/grads.service';

@Component({
  selector: 'app-grads',
  templateUrl: './grads.component.html',
  styleUrls: ['./grads.component.css'],
  providers:[ GradsService ]
})

export class GradsComponent implements OnInit {

  grads : Object[] = [];

  constructor(private gradsService : GradsService) { }

  ngOnInit() {
  	this.getGrads();
  }

  getGrads() {
  	this.gradsService.getGrads().then((data) => this.grads = data);
  	// console.log(this.grads);
  }

}
