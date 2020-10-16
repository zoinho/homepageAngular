import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AppService {

    constructor(){}
    private subPageOpen = new BehaviorSubject(false)

    blurBackground$ : Observable<boolean> = this.subPageOpen.asObservable();


    blurBackgroundOn() {
        this.subPageOpen.next(true);
        console.log("true")
    }
    blurBackgroundOff() {
        this.subPageOpen.next(false);
        console.log("false")
    }
    getValue() {
        return this.subPageOpen.getValue();
    }



}