import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profileData : any = {};
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.profileData = this.route.snapshot.data['profileData'];
  	console.log("in profile", this.profileData);
  	this.profileData.projects = this.profileData.projects.filter(project => project.approved);
  }

}
