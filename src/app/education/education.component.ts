import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Education } from './../interfaces';
import {EducationService} from './education.service';
import {first, tap} from 'rxjs/operators'
import { AppService } from '../app.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education$ : Observable<Education[]>;
  animationDone = new Subject;

  constructor(private educationService : EducationService, private appService: AppService) {

    
   }
  
  ngOnInit(): void {
    this.animationDone = this.appService.animationFinished;

    this.animationDone.pipe(first()).subscribe(
      (resp) => {
        this.education$ = this.educationService.loadEducationFromApi();
      }
    )

  }

  ngOnDestroy(){
    //this.animationDone.unsubscribe();
  }
}
