import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { Sample2Component } from './sample2/sample2.component';

import { ReactiveFormsModule } from '@angular/forms';
import { Sample1Component } from './sample1/sample1.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { SpinnerComponent } from './spinner/spinner.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { LoaderDirective } from './vf-components/loader.directive';
import { VfSpinnerComponent } from './vf-components/vf-spinner/vf-spinner.component';
import { DiasabledDirective } from './vf-components/diasabled.directive';






@NgModule({
  declarations: [
    AppComponent,
    Sample2Component,
    Sample1Component,
    MatchPasswordDirective,
    SpinnerComponent,
    LoaderDirective,
    VfSpinnerComponent,
    DiasabledDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    IndicatorsModule,
    ButtonsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
