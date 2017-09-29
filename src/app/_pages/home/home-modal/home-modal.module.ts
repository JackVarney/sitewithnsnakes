import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/Common';
import { HomeModalComponent } from './home-modal.component';
import { ModalButtonStateServiceModule} from '../services/modal-button-state-service.module';

@NgModule({
    declarations: [ HomeModalComponent ],
    imports: [
        NgbModule,
        CommonModule,
        ModalButtonStateServiceModule
    ],
    exports: [ HomeModalComponent ]
})

export class HomeModalModule { }
