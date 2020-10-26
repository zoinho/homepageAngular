import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Education } from './../interfaces';
import { Observable } from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators'
import { AppService } from '../app.service';
@Injectable({
  providedIn: 'root',
}) 

export class EducationService {


    constructor(private http: HttpClient, private appService: AppService){}

    loadEducationFromApi(): Observable<Education> {
      return this.http.get<Education>('http://localhost:3000/education').pipe( 
        map((response) => {
          return response;
        })
      )
    }




}