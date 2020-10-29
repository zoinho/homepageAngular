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
import { LoaderComponent } from './loader/loader.component';

import {LoaderService } from './loader/loader.service';
import { SliderComponent } from './slider/slider.component';
import { ExperienceSlideComponent } from './slider/experience-slide/experience-slide.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsSlideComponent } from './slider/skills-slide/skills-slide.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    PolygonGeneratorComponent,
    NavigationComponent,
    ExperienceComponent,
    LoaderComponent,
    SliderComponent,
    ExperienceSlideComponent,
    SkillsComponent,
    SkillsSlideComponent,
    HobbiesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
