import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

interface Polygon {
 
  height?: number;
  combinedPoints?: string;
  positionX:number;
  positionY:number;
  skewX: number;
  skewY: number;
  scale: number;
}
interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-polygon-generator',
  templateUrl: './polygon-generator.component.html',
  styleUrls: ['./polygon-generator.component.scss'],
})


export class PolygonGeneratorComponent implements OnInit {
  @Input() polygonCount:number;
  @Input() static:boolean;

  polygonArray: Polygon[] = [];
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  @HostListener('mousemove', ['$event'])
  onMouseMove(event) {
    const topLayer = document.querySelectorAll('.top');
    const middleLayer = document.querySelectorAll('.middle');
    const bottomLayer = document.querySelectorAll('.bottom');
    topLayer.forEach(x => {
      x.setAttribute('style', `transform:translate3d(${-event.offsetX*0.2}px,${-event.offsetY*0.2}px,0)`)
    })
    middleLayer.forEach(x => {
      x.setAttribute('style', `transform:translate3d(${-event.offsetX*0.07}px,${-event.offsetY*0.07}px,0)`)
    })
    bottomLayer.forEach(x => {
      x.setAttribute('style', `transform:translate3d(${-event.offsetX*0.03}px,${-event.offsetY*0.02}px,0)`)
    })
  }

  constructor(public appService: AppService) { }

  ngOnInit(): void {
    for(let i=0; i< this.polygonCount; i++) {
      this.polygonArray.push(this.createRandomPolygon())
    }

    this.appService.blurBackgroundOff();
  }
  createRandomPolygon():Polygon {
    return {
      positionX: Math.floor(Math.random() * (this.windowWidth/1.025)),
      positionY: Math.floor(Math.random() * (this.windowHeight/1.025)),
      skewX: Math.random() * 30,
      skewY: Math.random() * 30,
      scale: 0.5 + 1.5 *Math.random(),
      
    }

  }

}
