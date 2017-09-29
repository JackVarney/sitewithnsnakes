import { NgModule } from '@angular/core';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

// Components
import { HomeTextComponent } from './home-text.component';

// Services
import { ProgBarServiceModule } from '../services/prog-bar.module';
import { ModalButtonStateServiceModule } from '../services/modal-button-state-service.module';

@NgModule({
    declarations: [
        HomeTextComponent
    ],
    imports: [
        FormsModule,

        MdInputModule,
        ProgBarServiceModule,
        ModalButtonStateServiceModule
    ],
    exports: [
        HomeTextComponent
    ]
})

export class HomeTextModule { }
