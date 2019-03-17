import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppComponent } from './app.component';
import { SkiResortComponent } from './ski-resorts/ski-resort/ski-resort.component';
import { TracksComponent } from './ski-resorts/ski-resort/tracks/tracks.component';
import { WeatherComponent } from './ski-resorts/ski-resort/weather/weather.component';
import { SkiPassComponent } from './ski-resorts/ski-resort/ski-pass/ski-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    SkiResortComponent,
    TracksComponent,
    WeatherComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule,

    AppRoutingModule    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
