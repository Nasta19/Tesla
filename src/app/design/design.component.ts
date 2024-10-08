import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { CarService } from '../services/car.service'

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})

export class DesignComponent implements OnInit {
  cars: any[] = []; // Almacenar los coches obtenidos del backend

  constructor(private carService: CarService, private renderer: Renderer2) { }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response; // Almacenar la lista de coches
    }, error => {
      console.error('Error al obtener los coches:', error);
    });
  }

  // Funcion para cambiar el color del auto
  slides: { src: string, title: string }[] = [];
  currentColor: string = 'sStealthGrey';

  paintCar(color: { src: string, title: string }[], colorName: string): void {
    this.slides = color;
    this.currentColor = colorName;
    this.sumTotal(); //Recalcular el precio total
  }

  ngOnInit(): void {
    this.slides = this.sStealthGrey; // Inicializar el carrusel con un color por defecto
    /*this.autoSlide();*/ // Iniciar el deslizamiento automático
  }

  // Colores autos 
  sStealthGrey = [
    { src: 'http://localhost:5000/uploads/1726676383239-S-StealthGrey.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947930373-sStealthGrey2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947966087-sStealthGrey3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947974481-sStealthGrey4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
  ];

  sPearlWhiteMultiCoat = [
    { src: 'http://localhost:5000/uploads/1726852701647-S-PearlWhiteMultiCoat.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726949049541-S-PearlWhiteMultiCoat2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726949058828-S-PearlWhiteMultiCoat3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947974481-sStealthGrey4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
  ];

  sDeepBlueMetallic = [
    { src: 'http://localhost:5000/uploads/1727204193317-DeepBlueMetallic.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727204201651-DeepBlueMetallic2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727204209222-DeepBlueMetallic3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727204216332-DeepBlueMetallic4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
  ];

  sSolidBlack = [
    { src: 'http://localhost:5000/uploads/1727981615309-S-SolidBlack.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981607529-S-SolidBlack2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981600711-S-SolidBlack3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981594947-S-SolidBlack4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
  ];

  sUltraRed = [
    { src: 'http://localhost:5000/uploads/1727981589048-S-UltraRed.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981580783-S-UltraRed2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981565337-S-UltraRed3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981559783-S-UltraRed4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
  ];

  sLunarSilver = [
    { src: 'http://localhost:5000/uploads/1727981462832-S-LunarSilver.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981478538-S-LunarSilver2.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981543916-S-LunarSilver3.png', title: '' },
    { src: 'http://localhost:5000/uploads/1727981552663-S-LunarSilver4.png', title: '' },
    { src: 'http://localhost:5000/uploads/1726947982258-sStealthGrey5.png', title: '' }
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
  /*
  autoSlide(): void {
    setInterval(() => {
      this.nextSlide();
    }, 20000);
  }
  */

  // Esconder y aparecer controles del slide
  isControlShow = false;
  showControls(show: boolean): void {
    this.isControlShow = show;
  }

  // FUNCIONES PRECIOS
  basePrice: number = 68490; // Precio base del All-Wheel Drive en Cash
  activeTab: string = 'Cash'; // Opción de financiamiento por defecto
  activeTabOption: string = 'allWheelDrive'; // Modelo por defecto
  gasSavingChecked: boolean = true; // Estado inicial del checkbox de ahorro de gasolina
  finalPrice: number = this.basePrice;

  optionsPrices = {
    plaid: 83490,
    gasSaving: 6500,
    gasSavingMonth: 108,
    leaseAllWheelDrive: 891,
    leasePlaid: 1041,
    financeAllWheelDrive: 1070,
    financePlaid: 1314,
    pearlWhite: 1500,
    deepBlue: 1500,
    solidBlack: 1500,
    ultraRed: 2500,
    lunarSilver: 2500
  };

  // Función para cambiar el modelo del auto
  openTabOption(option: string) {
    this.activeTabOption = option;
    this.sumTotal();
  }

  // Función para cambiar la opción de financiamiento
  openTab(tab: string) {
    this.activeTab = tab;
    this.sumTotal();
  }

  // Función para calcular el precio total
  sumTotal() {
    if (this.activeTab === 'Cash') {
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.plaid
          : this.basePrice;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSaving;
      }
    } else if (this.activeTab === 'Lease') {
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.leasePlaid
          : this.optionsPrices.leaseAllWheelDrive;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSavingMonth;
      }
    } else if (this.activeTab === 'Finance') {
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.financePlaid
          : this.optionsPrices.financeAllWheelDrive;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSavingMonth;
      }
    } 

    if (this.currentColor === 'sPearlWhiteMultiCoat') {
      this.finalPrice += this.optionsPrices.pearlWhite;
    } else if (this.currentColor === 'sDeepBlueMetallic') {
      this.finalPrice += this.optionsPrices.deepBlue;
    } else if (this.currentColor === 'sSolidBlack') {
      this.finalPrice += this.optionsPrices.solidBlack;
    } else if (this.currentColor === 'sUltraRed') {
      this.finalPrice += this.optionsPrices.ultraRed;
    } else if (this.currentColor === 'sLunarSilver') {
      this.finalPrice += this.optionsPrices.lunarSilver;
    }
  }

  // Función para activar/desactivar ahorro de gasolina
  toggleGasSaving() {
    this.sumTotal();
  }
}

