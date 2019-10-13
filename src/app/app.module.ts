import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TetiereComponent } from './components/tetiere/tetiere.component';
import { SaisieComponent } from './components/saisie/saisie.component';
import { RecapComponent } from './components/recap/recap.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TetiereComponent,
    SaisieComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
