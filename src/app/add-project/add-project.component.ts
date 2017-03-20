import { Component, OnInit } from '@angular/core';
import { AddProjectService } from '../shared/addproject.service';
import  {GradsService} from '../shared/grads.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [AddProjectService]
})
export class AddProjectComponent implements OnInit {
  drob : Object[]=[];
  num : string ;
  constructor(private addProjectService: AddProjectService, private gradesprivate: GradsService ) { }

  ngOnInit() {
    this.num=localStorage.getItem("rbk.cohort")
    this.getgrads()
  }

addProject(title,url,gitHubLink,teamMembers,img){
    console.log(title,url,gitHubLink,teamMembers)
    this.addProjectService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }) ;
    }
    getgrads(){
      this.gradesprivate.getGradList(this.num).then((data) => this.drob = data );
    }

}
