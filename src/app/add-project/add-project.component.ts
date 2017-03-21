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
  drob : Object[] = [];
  num : String ;
  constructor(private addProjectService: AddProjectService, private gradeService: GradsService ) { }

  ngOnInit() {
    this.getgrads()
  }

addProject(title,url,gitHubLink,teamMembers,img){
    console.log(title,url,gitHubLink,teamMembers)
     console.log(arguments.length)
     this.addProjectService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }).then((data)=>console.log(data)) ;
     }
   
    getgrads(){
      this.num=localStorage.getItem("rbk.cohort")
      console.log(this.num)
      this.gradeService.getGradList(this.num).then((data) => this.drob=data );
      console.log(this.drob)
    }

}
