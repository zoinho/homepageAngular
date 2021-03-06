import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Education } from './../interfaces';
import {EducationService} from './education.service';
import {first, tap} from 'rxjs/operators'
import { AppService } from '../app.service';
import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {


  constructor(public educationService : EducationService, private appService: AppService, private loadingService:LoaderService) {

    this.appService.animationFinished.pipe(first()).subscribe(
      (resp) => {
        this.educationService.loadEducationFromApi();
        
      }
    )
    
   }
  
  ngOnInit(): void {
 

  }
  shake() {
    navigator.vibrate(350);
  }
}
