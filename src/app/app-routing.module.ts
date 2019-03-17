import { SkiResortComponent } from './ski-resorts/ski-resort/ski-resort.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent }     from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';


const coreRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'ski/:id', component: SkiResortComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }