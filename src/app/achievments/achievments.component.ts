import { Component, OnInit } from '@angular/core';
import { AchievmentsService } from '../shared/achievments.service';

@Component({
  selector: 'app-achievments',
  templateUrl: './achievments.component.html',
  styleUrls: ['./achievments.component.css'],
  providers:[AchievmentsService]
})
export class AchievmentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
