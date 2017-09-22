import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderModule } from './_navigation/header/header.module';
import { SidenavModule } from './_navigation/sidenav/sidenav.module';
import { appRouter } from './app.router';

import { GetIndexService } from './_navigation/get-index.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    HeaderModule,
    SidenavModule,

    appRouter
  ],
  providers: [ GetIndexService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
