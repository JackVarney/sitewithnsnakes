import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GetIndexService {

    private indexSource = new BehaviorSubject<number>(1);
    currentIndex = this.indexSource.asObservable();

    constructor () { }

    changeIndex(index: number) {
        this.indexSource.next(index);
        console.log(index);
    }
}
