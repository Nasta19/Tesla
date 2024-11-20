import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { CarsComponent } from './cars/cars.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'design', component: DesignComponent },
  { path: 'models', component: CarsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
