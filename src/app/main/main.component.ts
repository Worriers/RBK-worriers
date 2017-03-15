import { Component, OnInit } from '@angular/core';
import { GradsService } from '../shared/grads.service';
import { ProjectsService } from '../shared/projects.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GradsService, ProjectsService]
})
export class MainComponent implements OnInit {

  grads : Object[] = [];
  projects  : Object[] = [];

  constructor(private gradsService : GradsService, private projectsService: ProjectsService) { }

  ngOnInit() {
  	this.getGrads();
  }

  getGrads() {
  	this.gradsService.getGrads().then((data) => this.grads = data.splice(0,4));
  	console.log(this.grads);
  }

  getProjects() {
  	this.projectsService.getProjects().then((data) => this.projects = data.splice(0,4));
  }

}
