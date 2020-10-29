import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-slide',
  templateUrl: './skills-slide.component.html',
  styleUrls: ['./skills-slide.component.scss']
})
export class SkillsSlideComponent implements OnInit {
  @Input() skill:any;
  constructor() { }

  ngOnInit(): void {
  }

}
