import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef;
  @Input() type: string;
  @Input() data: any;
  dataValues = [];
  sliderScrollTop: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.type == 'experience') {
      this.dataValues = Object.values(this.data);
    } else {
      this.dataValues = this.data;
    }
  }
  slideUp() {
    let currentScroll = this.slider.nativeElement.scrollTop;

    this.sliderScrollTop =
      currentScroll - document.documentElement.clientHeight * 0.3; // 30vh
    this.slider.nativeElement.scrollTop = this.sliderScrollTop;
  }
  slideDown() {
    let currentScroll = this.slider.nativeElement.scrollTop;

    this.sliderScrollTop =
      currentScroll + document.documentElement.clientHeight * 0.3; // 30vh
    this.slider.nativeElement.scrollTop = this.sliderScrollTop;
  }
  returnZero() {
    return 0;
  }
}
