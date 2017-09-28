import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/behaviorsubject';

@Injectable()
export class ProgBarService {

    private barLength = new BehaviorSubject<number>(0);
    currentBarLength = this.barLength.asObservable();

    changeBarLength(length: number) {
        this.barLength.next(length);
        console.log('service: ' + length);
    }

}
