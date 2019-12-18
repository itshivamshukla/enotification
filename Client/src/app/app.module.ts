import { SharedModule } from './+shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './+core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './+user/home/home.component';
import { AboutUsComponent } from './+user/about-us/about-us.component';
import { ExaminationComponent } from './+user/examination/examination.component';
import { ResultsComponent } from './+user/results/results.component';
import { SyllabusComponent } from './+user/syllabus/syllabus.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ExaminationComponent,
    ResultsComponent,
    SyllabusComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
