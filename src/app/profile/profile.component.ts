import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profileData = {};
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
  	console.log("in profile", this.profileData)
  	this.profileData = this.route.snapshot.data['profileData'];
  }

}
