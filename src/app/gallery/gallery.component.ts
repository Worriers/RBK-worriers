import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../shared/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  host: {'(window:keydown)': 'hotkeys($event)'}
})
export class GalleryComponent implements OnInit {
  images : any[] = [];
  selectedImage;

  constructor(private galleryService : GalleryService) { }

  ngOnInit() {
    this.getImages();
  }

  setSelectedImage(image){
    this.selectedImage = image;
  }

  getImages() {
    this.galleryService.getImages().then((data) => this.images = data);
  }

  navigate(forward){
    const index = this.images.indexOf(this.selectedImage) + (forward ? 1 : -1);
    if (index >= 0 && index < this.images.length){
      this.selectedImage = this.images[index];
    }
  }

  hotkeys(event){
    if (this.selectedImage){
      if (event.keyCode == 37){
        this.navigate(false);
      }else if (event.keyCode == 39){
        this.navigate(true);
      }
    }
  }
}
