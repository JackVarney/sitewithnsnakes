import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModalButtonStateService {

    private buttonState = new BehaviorSubject<boolean>(false);
    currentButtonState = this.buttonState.asObservable();

    changeButtonState(state: boolean) {
        this.buttonState.next(state);
    }

}
