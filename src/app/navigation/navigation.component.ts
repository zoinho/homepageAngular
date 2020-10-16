import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private appService: AppService) { }
  subscription: Subscription;
  state$: Observable<boolean>

  ngOnInit(): void {
    this.state$ = this.appService.blurBackground$;
  }
  toggleBlur(){
    if(this.appService.getValue()) {
      this.appService.blurBackgroundOff();
    } else {
      this.appService.blurBackgroundOn()
    }

    
  }
  ngOnDestroy() {
  }
}


