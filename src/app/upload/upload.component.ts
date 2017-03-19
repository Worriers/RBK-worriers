import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { GalleryService } from '../shared/gallery.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [GalleryService]
})
export class UploadComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://127.0.0.1:5000/api/gallery'});
  public hasBaseDropZoneOver:boolean = false;
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
  constructor(private galleryService : GalleryService) { }
  images : any[] = [];
  ngOnInit() {
    this.getImages();
  }

  fetch(item){
    this.getImages();
    item.progress = 101;
  }

  getImages() {
    this.galleryService.getImages().then((data) => this.images = data);
  }

  deleteImage(id) {
    this.galleryService.deleteImage(id).then((data) => {
      if(data.status === 200){
        this.getImages();
      }
    });
  }
}
