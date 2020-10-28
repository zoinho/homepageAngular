import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() experience:Experience
  constructor() { }

  ngOnInit(): void {
  }

}
