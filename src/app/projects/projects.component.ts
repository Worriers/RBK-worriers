import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {
	projects : Object[] = [];
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
  	this.getProjects();
  }
   getProjects() {
  	this.projectsService.getProjects().then((data) => this.projects = data.splice(0,4));
  }

}
