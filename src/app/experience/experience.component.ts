import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AppService } from '../app.service';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {


  constructor(private appService: AppService, public experienceService: ExperienceService) {
    this.appService.animationFinished.pipe(first()).subscribe(
      () => {
        this.experienceService.loadExperienceFromApi();
      }
    )
   }

  ngOnInit(): void {
  }

}
