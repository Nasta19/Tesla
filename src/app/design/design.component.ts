import { Component } from '@angular/core';
import { CarService } from '../services/car.service'

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})
export class DesignComponent {
  cars: any[] = []; // Almacenar los coches obtenidos del backend

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response; // Almacenar la lista de coches
    }, error => {
      console.error('Error al obtener los coches:', error);
    });
  }

  // Funcion para cambiar el color del auto
  carPaint = "";
  paintCar(color: string): void {
    this.carPaint = color;
  }

  // Colores autos 
  sStealthGrey: string = 'http://localhost:5000/uploads/1726676383239-S-StealthGrey.png';
}
