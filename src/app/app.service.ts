import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  private subPageOpen = new BehaviorSubject(false);
  public animationFinished = new Subject();
  public shouldLoadContent = new BehaviorSubject<boolean>(false);

  blurBackground$: Observable<boolean> = this.subPageOpen.asObservable();

  blurBackgroundOn() {
    this.subPageOpen.next(true);
  }
  blurBackgroundOff() {
    this.subPageOpen.next(false);
  }

  animationDone() {
    this.animationFinished.next(true);
  }
}
