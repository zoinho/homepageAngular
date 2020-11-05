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
  mobileMenuOpen:boolean = false;
  constructor(private appService: AppService, private router: Router) {


   }
  subscription: Subscription;

  ngOnInit(): void {
  }
  toggleLink(route) {
    this.mobileMenuOpen = false;
    if(this.router.url == route) {
      this.router.navigate(['/'])
      this.routeUrl = '';
      this.appService.blurBackgroundOff();
      navigator.vibrate(50);

    } else {
      this.router.navigate([route])
      this.routeUrl = route;
      this.appService.blurBackgroundOn();
      navigator.vibrate(50);
    }
  }

  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  ngOnDestroy() {
  }
}


