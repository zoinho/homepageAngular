import { Component, OnInit } from '@angular/core';
import { first, tap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { HobbiesService } from './hobbies.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  constructor(private appService: AppService, public hobbiesService: HobbiesService) {

    this.appService.animationFinished.pipe(
      first(),
      tap( (response) =>{
        this.hobbiesService.loadHobbiesFromApi()
      }
        
      )).subscribe()
      

   }

  ngOnInit(): void {
  }
  

}
