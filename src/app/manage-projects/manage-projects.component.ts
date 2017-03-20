import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css'],
  providers: [AdminService]
})
export class ManageProjectsComponent implements OnInit {
  projects : any[] = [];
  error : string;

  constructor(private admin : AdminService) { }

  ngOnInit() {
  	this.getNotApprovedProjects();
  }

  getNotApprovedProjects() : any {
  	this.admin.getNotApprovedProjects().then(data => {
  		if(data.error){
  			this.error = data.error;
  		} else {
			this.projects = data;
  		}
  	});
  }

  approveProject(id) : any {
  	this.admin.approveProject(id).then(data => {
  		if(data.error){
  			alert(data.error.message);
  		} else {
  			alert("Project Has been approved!");
  			this.getNotApprovedProjects();
  		}
  	})
  }

  deleteProject(id) : any {
  	this.admin.deleteProject(id).then(data => {
  		if(data.error){
  			alert(data.error.message);
  		} else {
  			alert("Project Has been deleted!");
  			this.getNotApprovedProjects();
  		}
  	})
  }
}
