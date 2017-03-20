import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  providers: [AdminService]
})
export class ManageUsersComponent implements OnInit {

  grads : any[] = [];

  constructor(private admin : AdminService) { }

  ngOnInit() {
  }

  getNotActivatedUsers() : any {
  	this.admin.getNotActivatedUsers().then(data => this.grads = data);
  }
}
