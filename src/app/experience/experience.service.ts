import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import urlPath from '../app.config';
import { Experience } from '../interfaces';
import { LoaderService } from '../loader/loader.service';

@Injectable({
    providedIn: 'root'
})

export class ExperienceService {

    private experienceSubject = new BehaviorSubject(null);
    experience$:Observable<Experience[]> = this.experienceSubject.asObservable()
    constructor(private http: HttpClient, private loaderService: LoaderService){}

    loadExperienceFromApi() {
        const data$ = this.http.get(`${urlPath}/experience`).pipe(
            map(response => response),
            tap(response => this.experienceSubject.next(response))
        )

        if(!this.experienceSubject.getValue()) {
            this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
        }
    }
}