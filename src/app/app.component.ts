import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { routeAnimations, slideFromRight, slideFromLeft } from './app.component.animations';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimations,
    slideFromRight,
    slideFromLeft
  ]
})
export class AppComponent {

  constructor(private router: Router, public appService: AppService){ }


  slideAnimationFinished(event) { 
    this.appService.animationDone();
  }
  prepareOutlet(outlet: RouterOutlet) {
    return outlet.activatedRouteData?.state;
  }
}
