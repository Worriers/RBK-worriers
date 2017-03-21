import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay } from 'angular2-modal';
import { AddProjectService } from '../shared/addproject.service';
import  {GradsService} from '../shared/grads.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [AddProjectService, Modal, Overlay]
})
export class AddProjectComponent implements OnInit {
  drob : Object[] = [];
  num : String ;
  flag : Number;
  url1 :  Object[]=[];
  constructor(private addProjectService: AddProjectService, private gradeService: GradsService , overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal , private router : Router) { 
  overlay.defaultViewContainer = vcRef;
}

  ngOnInit() {
    if(!localStorage.getItem("rbk.isLogged")){
      this.router.navigate([('/')]);
    }
    this.getgrads()
  }

addProject(title,url,gitHubLink,teamMembers,img){
    for(var i=0;i<teamMembers.length;i++){
      if(teamMembers.indexOf(teamMembers[i])!==i){
        teamMembers.splice(i,1)
      }
      if(teamMembers.indexOf(undefined)>-1){
        teamMembers.splice(teamMembers.indexOf(undefined),1)
      }
    }
    this.url1=url.split(":")
     this.addProjectService.insertProject({title : title , url : url , gitHubLink : gitHubLink , teamMembers : teamMembers }).then((data)=> {
      if(this.url1.includes("https")||this.url1.includes("http")){
         this.modal.alert()
        .title('Admin!')
        .body('Add project is completed successful but wait admin to approve yor reqyest')
        .open();
      }else {
         this.modal.alert()
        .title('Admin!')
        .body('pleas check your input url project')
        .open();
      }
     }) ;
      this.router.navigate([('/')]);
     }
      
    getgrads(){
      this.num=localStorage.getItem("rbk.cohort")
      console.log(this.num)
      this.gradeService.getGradList(this.num).then((data) => this.drob=data );
      console.log(this.drob)
    }

}
