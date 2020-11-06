import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Education } from '../interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import {catchError, first, map, shareReplay, tap} from 'rxjs/operators'
import { AppService } from '../app.service';
import { LoaderService } from '../loader/loader.service';
import urlPath from '../app.config';
@Injectable({
  providedIn: 'root',
}) 

export class EducationService {

    private educationSubject = new BehaviorSubject(null);
    education$ = this.educationSubject.asObservable();

    constructor(private http: HttpClient, private appService: AppService, private loadingService: LoaderService){}

    loadEducationFromApi(){
      const data$ = this.http.get(`${urlPath}/education`).pipe( 
        map((response) => {
          return response;
        }),
        tap( resp => this.educationSubject.next(resp)),
      )
      if(!this.educationSubject.getValue()) {
        this.loadingService.showLoaderUntilPageLoaded(data$).subscribe();
      }
        
    }

}