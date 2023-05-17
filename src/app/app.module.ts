import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { KahvilaComponent } from './components/kahvila/kahvila.component';
import { MyyntiComponent } from './components/myynti/myynti.component';

@NgModule({
  declarations: [
    AppComponent,
    KahvilaComponent,
    MyyntiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
