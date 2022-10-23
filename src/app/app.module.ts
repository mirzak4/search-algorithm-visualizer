import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisheaderComponent } from './visheader/visheader.component';
import { DataViewComponent } from './data-view/data-view.component';
import { SquareItemComponent } from './data-view/square-item/square-item.component';
import { FormsModule } from '@angular/forms';
import { VisfooterComponent } from './visfooter/visfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    VisheaderComponent,
    DataViewComponent,
    SquareItemComponent,
    VisfooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
