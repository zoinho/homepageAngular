import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces';

@Component({
  selector: 'app-experience-slide',
  templateUrl: './experience-slide.component.html',
  styleUrls: ['./experience-slide.component.scss'],
})
export class ExperienceSlideComponent implements OnInit {
  @Input() experience: Experience;
  constructor() {}

  ngOnInit(): void {}
}
