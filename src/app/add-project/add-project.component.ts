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
  flag : Number;
  constructor(private addProjectService: AddProjectService, private gradeService: GradsService ) { }

  ngOnInit() {
    this.getgrads()
  }

addProject(title,url,gitHubLink,teamMembers,img){
    console.log(title,url,gitHubLink,teamMembers)
    for(var i=0;i<teamMembers.length;i++){
      if(teamMembers.indexOf(teamMembers[i])!==i){
        teamMembers.splice(i,1)
      }
      if(teamMembers.indexOf(undefined)>-1){
        teamMembers.splice(teamMembers.indexOf(undefined),1)
      }
    }

     console.log(arguments.length,teamMembers)
     this.addProjectService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }).then((data)=> {
       if(data.status===201){
         this.flag=201;
       }
       console.log(this.flag)
     }) ;
     }
      
    getgrads(){
      this.num=localStorage.getItem("rbk.cohort")
      console.log(this.num)
      this.gradeService.getGradList(this.num).then((data) => this.drob=data );
      console.log(this.drob)
    }

}
