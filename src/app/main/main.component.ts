import { Component, OnInit } from '@angular/core';
import { GradsService } from '../shared/grads.service';
import { ProjectsService } from '../shared/projects.service';
import { GalleryService } from '../shared/gallery.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [GradsService, ProjectsService, GalleryService]
})
export class MainComponent implements OnInit {

  grads : any[] = [];
  projects  : any[] = [];
  images : any[] = [];

  constructor(private gradsService : GradsService, private projectsService: ProjectsService,
  	private galleryService : GalleryService) { }

  ngOnInit() {
  	this.getGrads();
  	this.getProjects();
  	this.getImages();
  }

  getGrads() {
  	this.gradsService.getGrads().then((data) => {
  		data = data.filter(grad => grad.completed && grad.activated);
  		this.grads = this.shuffle(data).splice(0,4);
  	});
  }

  getProjects() {
  	this.projectsService.getProjects().then((data) => {
		  data = data.filter(project => project.approved);
  		this.projects = this.shuffle(data).splice(0,4);
  	});
  }

  getImages() {
  	this.galleryService.getImages().then((data) => {
  		this.images = this.shuffle(data).splice(0,4);
  	});
  }

  shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
  }
}
