import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';


@Injectable()

export class LoaderService{
    constructor(){}

    loaderOn$ = new BehaviorSubject(false);

    

}