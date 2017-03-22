import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css'],
  providers: [AdminService, ProjectsService]
})
export class ManageProjectsComponent implements OnInit {
  projects : any[] = [];
  error : string;

  allProjects : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private projectsService : ProjectsService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
    this.getNotApprovedProjects();
  }

  getNotApprovedProjects() : any {
  	this.admin.getNotApprovedProjects().then(data => {
  		if (data.error){
  			this.error = data.error;
  		} else {
        this.projects = data;
  		}
  	});

    this.projectsService.getProjects().then(data => {
      if (data.error){
        this.errorAll = data.error;
      } else {
        this.allProjects = data;
      }
    });
  }

  approveProject(id) : any {
  	this.admin.approveProject(id).then(data => {
  		if (data.error){
  			alert(data.error.message);
  		} else {
  			alert('Project Has been approved!');
  			this.getNotApprovedProjects();
  		}
  	});
  }

  deleteProject(id) : any {
  	this.admin.deleteProject(id).then(data => {
  		if (data.error){
  			alert(data.error.message);
  		} else {
  			alert('Project Has been deleted!');
  			this.getNotApprovedProjects();
  		}
  	});
  }
}
