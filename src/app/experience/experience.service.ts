import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Experience } from '../interfaces';
import { LoaderService } from '../loader/loader.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private experienceSubject = new BehaviorSubject(null);
  experience$: Observable<Experience[]> = this.experienceSubject.asObservable();
  constructor(
    private loaderService: LoaderService,
    private database: AngularFireDatabase
  ) {}

  loadExperienceFromApi() {
    const data$ = this.database
      .object('experience')
      .valueChanges()
      .pipe(
        map((response) => response),
        tap((response) => {
          this.experienceSubject.next(response);
        }),
        take(1)
      );

    if (!this.experienceSubject.getValue()) {
      this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
    }
  }
}
