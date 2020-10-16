import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

interface Polygon {
  startPoint: Coordinate;
  middlePoint: Coordinate;
  endPoint: Coordinate;
  height?: number;
  combinedPoints?: string;
  positionX:number;
  positionY:number;
  skewX: number;
  skewY: number;
  scale: number;
  layer: string;
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
  polygonCount = 40;
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
      this.polygonArray.push(this.createRandomPolygon(this.windowWidth/10, this.windowHeight/10, i))
    }
    this.polygonArray.forEach( x => {
      x.combinedPoints = ''+x.startPoint.x+','+x.startPoint.y+' '+x.middlePoint.x+','+x.middlePoint.y+' '+x.endPoint.x+','+x.endPoint.y
    })
    this.appService.blurBackgroundOff();
  }
  createRandomPolygon(maxWidth, maxHeight, i):Polygon {
    let layer: string;
    if(i<= 40) {
      layer = 'bottom';
    }else if (i<=60) {
      layer = 'middle';
    } else {
      layer = 'top'
    }
    return {
      startPoint: {
        x: maxWidth,
        y: maxWidth
      },
      middlePoint: {
        x: maxHeight,
        y: maxHeight
      },
      endPoint: {
        x: 2*maxHeight-maxWidth,
        y: maxWidth
      },
      positionX: Math.random() * (this.windowWidth/1.025),
      positionY: Math.random() * (this.windowHeight/1.025),
      skewX: Math.random() * 30,
      skewY: Math.random() * 30,
      scale: 0.5 + 1.5 *Math.random(),
      layer: layer
      
    }

  }

}
