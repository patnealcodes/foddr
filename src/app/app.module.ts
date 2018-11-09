// Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { AppRoutingModule } from './modules/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ShardsPageComponent } from './components/shards-page/shards-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CalculateFodderComponent } from './components/calculate-fodder/calculate-fodder.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    ShardsPageComponent,
    MainPageComponent,
    CalculateFodderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
