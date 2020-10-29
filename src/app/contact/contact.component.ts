import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(public appService: AppService) { 

    if(!this.appService.shouldLoadContent.getValue()) {
      this.appService.animationFinished.pipe(
        first(),
        tap(
          () => {
            this.appService.shouldLoadContent.next(true)
          }
        )
      ).subscribe();
    }
    
  }

  ngOnInit(): void {
  }

}
