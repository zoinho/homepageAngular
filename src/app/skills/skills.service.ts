import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Skills } from '../interfaces';
import { LoaderService } from '../loader/loader.service';

@Injectable({
    providedIn: 'root'
})

export class SkillsService {
    private skillsData = new BehaviorSubject(null)
    skills$: Observable<Skills[]> = this.skillsData.asObservable()
    
    constructor(private http:HttpClient, private loaderService: LoaderService){}

    loadSkillsFromApi(){
        const data$ =  this.http.get('http://localhost:3000/skills').pipe(
            map(resp => resp),
            tap( (resp) => {
                this.skillsData.next(resp);
            }
                
            )
        )
        if(!this.skillsData.getValue()) {
            this.loaderService.showLoaderUntilPageLoaded(data$).subscribe();
        }
    }
}