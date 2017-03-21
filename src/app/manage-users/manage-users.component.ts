import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [AdminService]
})
export class ManageUsersComponent implements OnInit {

  grads : any[] = [];
  error : string;

  constructor(private admin : AdminService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
    this.getNotActivatedUsers();
  }

  getNotActivatedUsers() : any {
  	this.admin.getNotActivatedUsers().then(data => {
  		if(data.error){
  			this.error = data.error;
  		} else {
        this.grads = data;
      }
    });
  }

  approveUser(id) : any {
  	this.admin.approveUser(id).then(data => {
  		if(data.error){
  			alert(data.error.message);
  		} else {
  			alert("User Has been approved!");
  			this.getNotActivatedUsers();
  		}
  	})
  }

  deleteUser(id) : any {
  	this.admin.deleteUser(id).then(data => {
  		if(data.error){
  			alert(data.error.message);
  		} else {
  			alert("User Has been deleted!");
  		}
  		this.getNotActivatedUsers();
  	})
  }

  // getNotActivatedProjects() : any {
    // 	this.admin.getNotActivatedProjects().then(data => {
      // 		if(data.error){
        // 			this.error = data.error;
        // 		} else {
          // 	this.grads = data;
          // 		}
          // 	});
          // }


          //  approveProject(id) : any {
            // 	this.admin.approveProject(id).then(data => {
              // 		if(data.error){
                // 			alert(data.error.message);
                // 		} else {
                  // 			alert("Project Has been approved!");
                  // 			this.getNotApprovedProjects();
                  // 		}
                  // 	})
                  // }

                  // deleteProject(id) : any {
                    // 	this.admin.deleteProject(id).then(data => {
                      // 		if(data.error){
                        // 			alert(data.error.message);
                        // 		} else {
                          // 			alert("Project Has been deleted!");
                          // 		}
                          // 		this.getNotApprovedProjects();
                          // 	})
                          // }
                        }
