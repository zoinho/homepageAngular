import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { LoaderService } from '../loader/loader.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class HobbiesService {
  private hobbiesData = new BehaviorSubject(null);
  hobbies$ = this.hobbiesData.asObservable();

  constructor(
    private loaderService: LoaderService,
    private database: AngularFireDatabase
  ) {}

  loadHobbiesFromApi() {
    const data$ = this.database
      .object('hobbies')
      .valueChanges()
      .pipe(
        map((response) => {
          return response;
        }),
        tap((response) => this.hobbiesData.next(response)),
        take(1)
      );

    if (!this.hobbiesData.getValue()) {
      this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
    }
  }
}
