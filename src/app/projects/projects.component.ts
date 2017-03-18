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
  flag  : Boolean ;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
  	this.getProjects();
    this.flag=false
  }
   getProjects() {
  	this.projectsService.getProjects().then((data) => this.projects = data );
  }
  addProject(title,url,gitHubLink,teamMembers,img){
    console.log(title,url,gitHubLink,teamMembers)
    this.projectsService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }) ;
    location.reload()
     this.flag=false
  }
  showAdd(){
    this.flag=true
  }
}
