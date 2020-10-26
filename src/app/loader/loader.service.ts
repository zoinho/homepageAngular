import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, first, map, tap } from 'rxjs/operators';


@Injectable()

export class LoaderService{
    
    private loaderOn = new BehaviorSubject(false);
    loadingObservable$ = this.loaderOn.asObservable();
    
    constructor(){}


    showLoaderUntilPageLoaded(content:Observable<any>): Observable<any> {

        return of(null).pipe(
           tap( () => {
               console.log('Emit true')
               this.loaderOn.next(true);
           }),
           concatMap(() => content),
           finalize(() => {
               this.loaderOn.next(false)
           })
        )
    }

}