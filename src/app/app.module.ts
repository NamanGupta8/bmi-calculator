import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { BmiComponent } from './bmi/bmi.component';
import { HeaderComponent } from './header/header.component';
import { StandardComponent } from './bmi/standard/standard.component';
import { MetricComponent } from './bmi/metric/metric.component';
import { ConditionsComponent } from './bmi/conditions/conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BmiComponent,
    HeaderComponent,
    StandardComponent,
    MetricComponent,
    ConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
