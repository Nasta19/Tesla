import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
   selector: 'app-cars',
   templateUrl: './cars.component.html',
   styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
   productos: any[] = [];

   constructor(private CarService: CarService) { }

   ngOnInit(): void {
      this.CarService.getCars().subscribe(data => {
         this.productos = data;
      });
   }
}
