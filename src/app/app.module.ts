import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Stuff
import { AppComponent } from './app.component';

// Navigation Component
import { HeaderModule } from './_navigation/header/header.module';
import { SidenavModule } from './_navigation/sidenav/sidenav.module';
import { appRouter } from './app.router';

import { GetIndexService } from './services/get-index/get-index.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(

    ),

    HeaderModule,
    SidenavModule,
    appRouter,
  ],
  providers: [
    GetIndexService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
