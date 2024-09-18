import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './services/car.service';
import { ChargingComponent } from './charging/charging.component';
import { EnergyComponent } from './energy/energy.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { DesignComponent } from './design/design.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ChargingComponent,
    EnergyComponent,
    ModelsComponent,
    DesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }