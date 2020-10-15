import { Component, OnInit } from '@angular/core';

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
  maxWidth = 100;
  maxHeight = 250;
  
  constructor() { }

  ngOnInit(): void {
    for(let i=0; i< this.polygonCount; i++) {
      this.polygonArray.push(this.createRandomPolygon(this.maxWidth, this.maxHeight))
    }
    this.polygonArray.forEach( x => {
      x.combinedPoints = ''+x.startPoint.x+','+x.startPoint.y+' '+x.middlePoint.x+','+x.middlePoint.y+' '+x.endPoint.x+','+x.endPoint.y
    })
    console.log(this.polygonArray)
  }
  createRandomPolygon(maxWidth, maxHeight):Polygon {

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
      positionX: Math.floor(Math.random() * (this.windowWidth/1.1)),
      positionY: Math.floor(Math.random() * (this.windowHeight/1.1)),
      skewX: Math.floor(Math.random() * 40),
      skewY: Math.floor(Math.random() * 50),

      scale: Math.floor(Math.random() * (1 * 3 - 1.3 * 3) + 1.3 * 3) / (1.3*3)
      
    }

  }

}
