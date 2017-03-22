import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

  stats = {};
  constructor(private admin : AdminService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('rbk.type') !== 'admin'){
      this.router.navigate(['/login']);
    }
  	this.getAdminStats();
  }

  getAdminStats() : any {
  	this.admin.getAdminStats().then(data => this.stats = data);
  }
}
