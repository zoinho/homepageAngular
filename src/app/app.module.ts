import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { PolygonGeneratorComponent } from './polygon-generator/polygon-generator.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ExperienceComponent } from './experience/experience.component';
@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    PolygonGeneratorComponent,
    NavigationComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
