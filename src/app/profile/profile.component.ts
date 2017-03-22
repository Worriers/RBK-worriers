import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData : any = {};
  icons = { 'Project' : 'fa fa-window-restore',
            'Promotion' : 'fa fa-check',
            'New Job' : 'fa fa-handshake-o',
            'Certification' : 'fa fa-certificate',
            'Competition': 'fa fa-code',
            'Other': 'fa fa-thumbs-up'

  };

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.profileData = this.route.snapshot.data['profileData'];
  	// console.log("in profile", this.profileData);
  	this.profileData.projects = this.profileData.projects.filter(project => project.approved);

    this.profileData.achievments = this.profileData.achievments.map(ach => {
      ach.iconClass = this.icons[ach.category];
      return ach;
    });
  }

}
