import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './services/car.service';
import { ChargingComponent } from './charging/charging.component';
import { EnergyComponent } from './energy/energy.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ChargingComponent,
    EnergyComponent,
    DesignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }