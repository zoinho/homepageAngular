import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
        const data$ = this.http.get('http://192.168.0.38:3000/hobbies').pipe(
            map(response => response),
            tap(response => this.hobbiesData.next(response))
        )

        if(!this.hobbiesData.getValue()) {
            this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
        }
    }




}