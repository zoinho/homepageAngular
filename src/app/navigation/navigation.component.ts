import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  routeUrl:string = '';
  constructor(private appService: AppService, private router: Router) {


   }
  subscription: Subscription;
  state$: Observable<boolean>

  ngOnInit(): void {
    this.state$ = this.appService.blurBackground$;
  }
  toggleLink(route) {
    if(this.router.url == route) {
      this.router.navigate(['/'])
      this.routeUrl = '';
    } else {
      this.router.navigate([route])
      this.routeUrl = route;
    }
  }
  ngOnDestroy() {
  }
}


