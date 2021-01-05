import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  catchError,
  first,
  map,
  shareReplay,
  tap,
  finalize,
  take,
} from 'rxjs/operators';
import { AppService } from '../app.service';
import { LoaderService } from '../loader/loader.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  private educationSubject = new BehaviorSubject(null);
  education$ = this.educationSubject.asObservable();

  constructor(
    private loadingService: LoaderService,
    private database: AngularFireDatabase
  ) {}

  loadEducationFromApi() {
    const data$ = this.database
      .object('education')
      .valueChanges()
      .pipe(
        map((response) => {
          return response;
        }),
        tap((resp) => {
          this.educationSubject.next(resp);
        }),
        take(1)
      );

    if (!this.educationSubject.getValue()) {
      this.loadingService.showLoaderUntilPageLoaded(data$).subscribe();
    }
  }
}
