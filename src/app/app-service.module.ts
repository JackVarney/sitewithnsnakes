import { NgModule } from '@angular/core';

import { GetPageID } from './_pages/get-page-id.service';
// import { GetIndexService } from './_navigation/get-index.service';

@NgModule({
    providers: [
       GetPageID,
//       GetIndexService
    ]
})

export class AppServiceModule { }
