import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience-slider',
  templateUrl: './experience-slider.component.html',
  styleUrls: ['./experience-slider.component.scss']
})
export class ExperienceSliderComponent implements OnInit {
  @ViewChild('slider') slider : ElementRef;
  sliderScrollTop: number = 0;
  constructor(public experienceService: ExperienceService) { }

  ngOnInit(): void {

  }
  slideUp(){
    let currentScroll = this.slider.nativeElement.scrollTop;
    
    this.sliderScrollTop = currentScroll - document.documentElement.clientHeight *0.3 // 30vh
    this.slider.nativeElement.scrollTop = this.sliderScrollTop;
    console.log(this.sliderScrollTop)
  }
  slideDown(){
    let currentScroll = this.slider.nativeElement.scrollTop;
    
    this.sliderScrollTop = currentScroll + document.documentElement.clientHeight *0.3 // 30vh
    this.slider.nativeElement.scrollTop = this.sliderScrollTop;
    console.log(this.sliderScrollTop)
  }
}
