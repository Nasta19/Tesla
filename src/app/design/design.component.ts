import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service'


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})

export class DesignComponent implements OnInit {
  cars: any[] = []; // Almacenar los coches obtenidos del backend

  constructor(private carService: CarService) { }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response; // Almacenar la lista de coches
    }, error => {
      console.error('Error al obtener los coches:', error);
    });
  }

  // Funcion para cambiar el color del auto
  slides: { src: string, title: string }[] = [];

  paintCar(color: { src: string, title: string }[]): void {
    this.slides = color; // Actualizar las diapositivas con el nuevo color
  }

  ngOnInit(): void {
    this.slides = this.sStealthGrey; // Inicializar el carrusel con un color por defecto
    this.autoSlide(); // Iniciar el deslizamiento automático
  }
  
  // Colores autos 
  sStealthGrey = [
    { src: 'http://localhost:5000/uploads/1726676383239-S-StealthGrey.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947930373-sStealthGrey2.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947966087-sStealthGrey3.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947974481-sStealthGrey4.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: ''}
  ];
  
  sPearlWhiteMultiCoat = [
    { src: 'http://localhost:5000/uploads/1726852701647-S-PearlWhiteMultiCoat.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726949049541-S-PearlWhiteMultiCoat2.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726949058828-S-PearlWhiteMultiCoat3.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947974481-sStealthGrey4.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: ''}
  ];

  sDeepBlueMetallic = [
    { src: 'http://localhost:5000/uploads/1727204193317-DeepBlueMetallic.png', title: ''},
    { src: 'http://localhost:5000/uploads/1727204201651-DeepBlueMetallic2.png', title: ''},
    { src: 'http://localhost:5000/uploads/1727204209222-DeepBlueMetallic3.png', title: ''},
    { src: 'http://localhost:5000/uploads/1727204216332-DeepBlueMetallic4.png', title: ''},
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: ''}
  ];

  //Carousel
  currentSlide = 0;

  // Cambiar a la siguiente imagen
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  // Cambiar a la imagen anterior
  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  // Saltar a una imagen específica
  setSlide(index: number): void {
    this.currentSlide = index;
  }

  // Deslizar automáticamente cada 5 segundos
  autoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 20000);
  }

  // Esconder y aparecer controles del slide
  isControlShow = false;
  showControls(show: boolean): void {
    this.isControlShow = show;
  }

  activeTab: string = 'Cash'; 
  // Método para cambiar la tab activa
  openTab(tabName: string): void {
    this.activeTab = tabName;
  }
}
