import { Component, OnInit ,ViewContainerRef } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';
import { ProjectsService } from '../shared/projects.service';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';

@Component({
  selector: 'app-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.css'],
  providers: [AdminService, ProjectsService, Modal, Overlay ]
})
export class ManageProjectsComponent implements OnInit {
  projects : any[] = [];
  error : string;

  allProjects : any[] = [];
  errorAll : string;

  constructor(private admin : AdminService, private projectsService : ProjectsService, private router: Router ,vcRef: ViewContainerRef, overlay: Overlay, public modal: Modal) { 
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    if(localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
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

    this.projectsService.getProjects().then(data => {
      if(data.error){
        this.errorAll = data.error;
      } else {
        this.allProjects = data;
      }
    });
  }

  approveProject(id) : any {
  	this.admin.approveProject(id).then(data => {
  		if(data.error){
        this.modal.alert()
        .title("Error")
        .body(data.error.message)
  			.open()
  		} else {
         this.modal.alert()
        .title("Great")
        .body("Project Has been approved!")
        .open()
  			this.getNotApprovedProjects();
  		}
  	})
  }

  deleteProject(id) : any {
  	this.admin.deleteProject(id).then(data => {
  		if(data.error){
  			 this.modal.alert()
        .title("Error")
        .body(data.error.message)
        .open()
      } else {
         this.modal.alert()
        .title("Great")
        .body("Project Has been deleted!")
        .open()
  			this.getNotApprovedProjects();
  		}
  	})
  }
}
