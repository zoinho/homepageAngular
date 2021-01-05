import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Skills } from '../interfaces';
import { LoaderService } from '../loader/loader.service';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skillsData = new BehaviorSubject(null);
  skills$: Observable<Skills[]> = this.skillsData.asObservable();

  constructor(
    private loaderService: LoaderService,
    private database: AngularFireDatabase
  ) {}

  loadSkillsFromApi() {
    const data$ = this.database
      .object('skills')
      .valueChanges()
      .pipe(
        map((resp) => resp),
        tap((resp) => {
          this.skillsData.next(resp);
        }),
        take(1)
      );

    if (!this.skillsData.getValue()) {
      this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
    }
  }
}
