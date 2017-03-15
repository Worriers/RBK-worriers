import { Component, OnInit } from '@angular/core';
import { GradsService } from '../shared/grads.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GradsService]
})
export class MainComponent implements OnInit {

  grads : Object[] = [];

  constructor(private gradsService : GradsService) { }

  ngOnInit() {
  	this.getGrads();
  }

  getGrads() {
  	this.gradsService.getGrads().then((data) => this.grads = data.splice(0,4));
  	console.log(this.grads);
  }

  getProjects() {
  	this.gradsService.getGrads().then((data) => this.grads = data.splice(0,4));
  }

}
