import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeStyle} from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  images : string[] = ['assets/bg1.jpg', 'assets/bg2.jpg', 'assets/bg3.jpg', 'assets/bg4.jpg', 'assets/bg5.jpg'];
  qoutes : string[] = ['Perseverance is your weapon, knowledge is your key',
  						'If it doesn\'t challenge you, it wont change you ',
  						'Stay positive, work hard, make it happen',
  						'Your only limit is you',
  						'Look in the mirror, thats your competition'
  					]
  image : any;
  qoute : string;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustStyle('url('+this.images[Math.floor(Math.random() * 5)]+')');
    this.qoute = this.qoutes[Math.floor(Math.random() * 5)];
    $('#image').animate({width:'110%'}, 5000);
    setInterval(()=> {
      // $('#image').finish();
     $('#image').animate({width:'105%'}, 5000);
      this.image = this.sanitizer.bypassSecurityTrustStyle('url('+this.images[Math.floor(Math.random() * 5)]+')');
      this.qoute = this.qoutes[Math.floor(Math.random() * 5)];
      $('#image').fadeIn('slow');
      $('#qoute').fadeIn('slow');
      $('#image').animate({width:'110%'}, 3000);
    }, 5000)
  }

}
