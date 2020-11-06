import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import urlPath from '../app.config';
import { LoaderService } from '../loader/loader.service';

@Injectable({
    providedIn: 'root'
})

export class HobbiesService {

    private hobbiesData = new BehaviorSubject(null);
    hobbies$ = this.hobbiesData.asObservable()
    
    constructor(private http: HttpClient, private loaderService: LoaderService){

    }

    loadHobbiesFromApi() {
        const data$ = this.http.get(`${urlPath}/hobbies`).pipe(
            map(response => response),
            tap(response => this.hobbiesData.next(response))
        )

        if(!this.hobbiesData.getValue()) {
            this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
        }
    }




}