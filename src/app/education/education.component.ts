import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from './../interfaces';
import {EducationService} from './education.service';
import {tap} from 'rxjs/operators'
import { AppService } from '../app.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private educationService : EducationService, private appService: AppService) { }
  education$ : Observable<Education[]>;

  ngOnInit(): void {
    this.education$ = this.educationService.loadEducationFromApi();
  }

}
