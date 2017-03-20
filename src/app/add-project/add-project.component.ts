import { Component, OnInit } from '@angular/core';
import { AddProjectService } from '../shared/addproject.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [AddProjectService]
})
export class AddProjectComponent implements OnInit {
  drob : Object[]=[];
  constructor(private addProjectService: AddProjectService) { }

  ngOnInit() {
    this.drob.push("ola","dania")
  }

addProject(title,url,gitHubLink,teamMembers,img){
    console.log(title,url,gitHubLink,teamMembers)
    this.addProjectService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }) ;
    }

}
