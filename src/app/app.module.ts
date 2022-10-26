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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlgPipe } from './shared/pipes/alg.pipe';
import { DataTopRowComponent } from './data-view/data-top-row/data-top-row.component';
import { DataInsightComponent } from './data-view/data-insight/data-insight.component';

@NgModule({
  declarations: [
    AppComponent,
    VisheaderComponent,
    DataViewComponent,
    SquareItemComponent,
    VisfooterComponent,
    AlgPipe,
    DataTopRowComponent,
    DataInsightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
