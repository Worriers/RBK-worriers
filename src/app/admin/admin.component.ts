import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

  stats = {};
  constructor(private admin : AdminService) { }

  ngOnInit() {
  	this.getAdminStats();
  }

  getAdminStats() : any {
  	this.admin.getAdminStats().then(data => this.stats = data);
  }
}
