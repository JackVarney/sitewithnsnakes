import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { HeaderModule } from './_navigation/header/header.module';
import { SidenavModule } from './_navigation/sidenav/sidenav.module';
import { appRouter } from './app.router';

import { GetIndexService } from './_navigation/get-index.service';

import { AppServiceModule } from './app-service.module';

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
    AppServiceModule
  ],
  providers: [
    GetIndexService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
