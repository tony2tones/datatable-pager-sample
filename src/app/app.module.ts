import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DbService } from './db.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule,
    
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
