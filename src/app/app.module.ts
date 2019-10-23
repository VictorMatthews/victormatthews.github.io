import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './home/landing/landing.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { BiographyComponent } from './home/biography/biography.component';
import { ContactComponent } from './home/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './resume/resume.component';
import { JobComponent } from './resume/cards/job/job.component';
import { EducationComponent } from './resume/cards/education/education.component';
import { SkillComponent } from './resume/cards/skill/skill.component';
import { GitRepoComponent } from './home/portfolio/cards/git-repo/git-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LandingComponent,
    PortfolioComponent,
    BiographyComponent,
    ContactComponent,
    ResumeComponent,
    FooterComponent,
    JobComponent,
    EducationComponent,
    SkillComponent,
    GitRepoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
