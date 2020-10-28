import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { LoaderService } from '../loader/loader.service';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private appService: AppService, public skillsService: SkillsService) {

    this.appService.animationFinished.pipe(
      first()).subscribe(
      () => {
         this.skillsService.loadSkillsFromApi()
      }
        
      
      )
       }

  ngOnInit(): void {
  }
  returnZero() {
    return 0;
  }
}
