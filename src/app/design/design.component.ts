import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener, AfterViewInit } from '@angular/core';
import { CarService } from '../services/car.service'
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrl: './design.component.css',
})

export class DesignComponent implements AfterViewInit {
  cars: any[] = []; // Almacenar los coches obtenidos del backend

  constructor(private carService: CarService, private renderer: Renderer2) { }

  @ViewChild('scrollableAside') scrollableAside!: ElementRef;
  ngAfterViewInit() {
    this.scrollableAside.nativeElement.addEventListener('scroll', () => {
      const { scrollTop, scrollHeight, clientHeight } = this.scrollableAside.nativeElement;

      // Cambia a video si se llega al final del div
      if (scrollTop + clientHeight >= scrollHeight) {
        this.isVideo = true; // Cambiar a video
      } else {
        this.isVideo = false; // Cambiar a imágenes
      }
    });
    this.autoSlide();
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response; // Almacenar la lista de coches
    }, error => {
      console.error('Error al obtener los coches:', error);
    });
  }

  // Escuchar el scroll en toda la ventana
  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: WheelEvent) {
    // Redirigir el evento de scroll al aside
    if (this.scrollableAside) {
      event.preventDefault(); // Prevenir el scroll de la ventana
      const delta = event.deltaY; // Obtener la cantidad de desplazamiento
      this.scrollableAside.nativeElement.scrollTop += delta; // Desplazar el aside
    }
  }

  // Funcion para cambiar el color del auto
  slides: { src: string, title: string }[] = [];
  currentColor: string = 'sStealthGrey';

  paintCar(color: { src: string, title: string }[], colorName: string): void {
    this.slides = color;
    this.currentColor = colorName;
    this.sumTotal(); //Recalcular el precio total
    this.changeColorNamePrice();
  }

  ngOnInit(): void {
    this.slides = this.sStealthGrey; // Inicializar el carrusel con un color por defecto
    /*this.autoSlide();*/ // Iniciar el deslizamiento automático
    window.addEventListener('scroll', this.onScroll.bind(this));
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

  //FUNCIONES VIDEO
  isEntering = true;
  isExiting = false;
  isVideo: boolean = false;
  video = [
    { src: 'https://digitalassets.tesla.com/co1n/video/upload/f_auto:video,q_auto:best/prod/static_assets/MODEL3_/UI/autopark_m3.mp4', title: '' },
    { src: 'https://digitalassets.tesla.com/co1n/video/upload/f_auto:video,q_auto:best/prod/static_assets/MODEL3_/UI/lane_change_m3.mp4', title: '' },
    { src: 'https://digitalassets.tesla.com/co1n/video/upload/f_auto:video,q_auto:best/prod/static_assets/MODEL3_/UI/navigate-on-autopilot-m3.mp4', title: '' },
  ];
  onScroll(): void {
    const scrollTop = window.scrollY + window.innerHeight; // Obtener la posición actual del scroll
    const docHeight = document.documentElement.scrollHeight; // Altura total del documento

    // Comprobar si se ha llegado al final del documento
    if (scrollTop >= docHeight - 5) { // Un margen de 10px para detectar el final
      this.isVideo = true; // Cambiar a videos
    } 
  }
  
  // Cambiar titulo al color elegido 
  @ViewChild('colorsName') colorsName!: ElementRef;
  @ViewChild('colorsPrice') colorsPrice!: ElementRef;

  changeColorNamePrice(): void{
    if (this.currentColor === 'sPearlWhiteMultiCoat'){
      this.colorsName.nativeElement.innerHTML = 'Pearl White Multi Coat';
      this.colorsPrice.nativeElement.innerHTML = '$ 1,500.00';
    } else if (this.currentColor === 'sDeepBlueMetallic'){
      this.colorsName.nativeElement.innerHTML = 'Deep Blue Metallic';
      this.colorsPrice.nativeElement.innerHTML = '$ 1,500.00';
    } else if (this.currentColor === 'sSolidBlack'){
      this.colorsName.nativeElement.innerHTML = 'Solid Black';
      this.colorsPrice.nativeElement.innerHTML = '$ 1,500.00';
    } else if (this.currentColor === 'sUltraRed'){
      this.colorsName.nativeElement.innerHTML = 'Ultra Red';
      this.colorsPrice.nativeElement.innerHTML = '$ 2,500.00';
    } else if (this.currentColor === 'sLunarSilver'){
      this.colorsName.nativeElement.innerHTML = 'Lunar Silver';
      this.colorsPrice.nativeElement.innerHTML = '$ 2,500.00';
    } else {
      this.colorsName.nativeElement.innerHTML = 'Stealth Grey';
      this.colorsPrice.nativeElement.innerHTML = 'Included';
    }
  }

  //Carousel
  currentSlide = 0;

  // Método para avanzar a la siguiente imagen/video
  nextSlide(): void {
    if (this.isVideo) {
      this.currentSlide = (this.currentSlide + 1) % this.video.length; // Cambiar entre videos
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length; // Cambiar entre imágenes
    }
  }

  // Método para retroceder a la imagen/video anterior
  prevSlide(): void {
    if (this.isVideo) {
      this.currentSlide = (this.currentSlide - 1 + this.video.length) % this.video.length; // Cambiar entre videos
    } else {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; // Cambiar entre imágenes
    }
  }

  // Saltar a una imagen específica
  setSlide(index: number): void {
    this.currentSlide = index;
  }

  // Deslizar automáticamente cada 20 segundos
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

  // FUNCIONES PRECIOS
  basePrice: number = 68490; // Precio base del All-Wheel Drive en Cash
  activeTab: string = 'Cash'; // Opción de financiamiento por defecto
  activeTabOption: string = 'allWheelDrive'; // Modelo por defecto
  gasSavingChecked: boolean = true; // Estado inicial del checkbox de ahorro de gasolina
  autoFullDriveChecked: boolean = false; 
  autoDriveChecked: boolean = false; 
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
    lunarSilver: 2500,
    leasePearlWhite: 28,
    leaseDeepBlue: 28,
    leaseSolidBlack: 28,
    leaseUltraRed: 38,
    leaseLunarSilver: 38,
    autoFullDrive: 8000,
    autoDrive: 5000
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
    // Si la tab Cash esta activa
    if (this.activeTab === 'Cash') {
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.plaid
          : this.basePrice;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSaving;
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
    } else if (this.activeTab === 'Lease') {  // Si la tab Lease esta activa
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.leasePlaid
          : this.optionsPrices.leaseAllWheelDrive;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSavingMonth;
      }
      if (this.currentColor === 'sPearlWhiteMultiCoat') {
        this.finalPrice += this.optionsPrices.leasePearlWhite;
      } else if (this.currentColor === 'sDeepBlueMetallic') {
        this.finalPrice += this.optionsPrices.leaseDeepBlue;
      } else if (this.currentColor === 'sSolidBlack') {
        this.finalPrice += this.optionsPrices.leaseSolidBlack;
      } else if (this.currentColor === 'sUltraRed') {
        this.finalPrice += this.optionsPrices.leaseUltraRed;
      } else if (this.currentColor === 'sLunarSilver') {
        this.finalPrice += this.optionsPrices.leaseLunarSilver;
      }
    } else if (this.activeTab === 'Finance') { // Si la tab Finance esta activa
      this.finalPrice =
        this.activeTabOption === 'plaid'
          ? this.optionsPrices.financePlaid
          : this.optionsPrices.financeAllWheelDrive;
      if (!this.gasSavingChecked) {
        this.finalPrice += this.optionsPrices.gasSavingMonth;
      }
      if (this.currentColor === 'sPearlWhiteMultiCoat') {
        this.finalPrice += this.optionsPrices.leasePearlWhite;
      } else if (this.currentColor === 'sDeepBlueMetallic') {
        this.finalPrice += this.optionsPrices.leaseDeepBlue;
      } else if (this.currentColor === 'sSolidBlack') {
        this.finalPrice += this.optionsPrices.leaseSolidBlack;
      } else if (this.currentColor === 'sUltraRed') {
        this.finalPrice += this.optionsPrices.leaseUltraRed;
      } else if (this.currentColor === 'sLunarSilver') {
        this.finalPrice += this.optionsPrices.leaseLunarSilver;
      }
    }
    
    if (this.autoFullDriveChecked) {
      this.finalPrice += this.optionsPrices.autoFullDrive;
    } else if (this.autoDriveChecked) {
      this.finalPrice += this.optionsPrices.autoDrive;
    }
  }

  // Función para activar/desactivar ahorro de gasolina
  toggleGasSaving() {
    this.sumTotal();
  }

  toggleFullDriveOption() {
    this.sumTotal();
  }

  toggleDriveOption() {
    this.sumTotal();
  }

   // POP UP controlar desde este component (design)
   @ViewChild(PopupComponent) popup!: PopupComponent;

   openPopupFromDesign() {
     this.popup.openPopup();
   }

   isPopupOpen = false;

   // Funciones para abrir/cerrar el pop-up
   openPopup() {
     this.isPopupOpen = true;
   }
 
   closePopup() {
     this.isPopupOpen = false;
   }
}
