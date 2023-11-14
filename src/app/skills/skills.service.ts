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
        tap((resp: any) => {
          
          const skillObj= {icon: resp.icon, skills:
            {advanced: [...resp.skills.advanced], intermediate: [...resp.skills.intermediate], basic:  [...resp.skills.basic]}
          }
          this.skillsData.next(skillObj);
          console.log(skillObj);
        }),
        take(1)
      );

    if (!this.skillsData.getValue()) {
      this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
    }
  }
}
