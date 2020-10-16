import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Education } from './../interfaces';
import { Observable } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
}) 

export class EducationService {


    constructor(private http: HttpClient){}

    loadEducationFromApi(): Observable<Education[]> {
      return this.http.get<Education[]>('http://localhost:3000/education').pipe( 
        map((response) => {
          console.log(response);
          return response;
        })
      )
    }




}