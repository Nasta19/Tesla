import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private renderer: Renderer2){}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/design') {
          // Añadir clase que deshabilita el scroll
          this.renderer.addClass(document.body, 'overflow-hidden');
        } else {
          // Quitar clase cuando no esté en la ruta /design
          this.renderer.removeClass(document.body, 'overflow-hidden');
        }
      }
    });
  }
  
  lastScrollTop = 0;
  menuClass = 'menu'; // Clase predeterminada del menú

  @HostListener("window:scroll", ['$event'])
  showMenuWhenTopScroll(): void {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica si se ha llegado a la parte superior de la página
    if (currentScrollTop === 0) {
      this.menuClass = 'menu'; // Clase del menú normal cuando está en la parte superior
    } else if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      this.menuClass = 'menu'; // Mantiene la clase del menú normal
    } else {
      // Scrolling up
      this.menuClass = 'menu-top-scroll'; // Clase del menú cuando se desplaza hacia arriba
    }
    
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Para evitar valores negativos
  }

  // Funcion para el menu desplegable de vehículos
  isDropdownVisibleVehicles = false;
  showDropdownVehicles(): void {
    this.isDropdownVisibleVehicles = true;
    this.updateMenuClass(); // Actualizar las clases del menú
  }
  
  hideDropdownVehicles(): void {
    this.isDropdownVisibleVehicles = false;
    this.updateMenuClass(); // Actualizar las clases del menú
  }

  // Funcion para el menu desplegable de energía
  isDropdownVisibleEnergy = false;
  showDropdownEnergy(): void {
    this.isDropdownVisibleEnergy = true;
    this.updateMenuClass(); // Actualizar las clases del menú
  }
  
  hideDropdownEnergy(): void {
    this.isDropdownVisibleEnergy = false;
    this.updateMenuClass(); // Actualizar las clases del menú
  }

  // Funcion para el menu desplegable de carga
  isDropdownVisibleCharging = false;
  showDropdownCharging(): void {
    this.isDropdownVisibleCharging = true;
    this.updateMenuClass(); // Actualizar las clases del menú
  }
  
  hideDropdownCharging(): void {
    this.isDropdownVisibleCharging = false;
    this.updateMenuClass(); // Actualizar las clases del menú
  }

  // Funcion para actualizar las clases del menú basándose en los submenús y el scroll
  private updateMenuClass(): void {
    // Si hay scroll en la parte superior, mantener la clase normal
    if (window.pageYOffset === 0) {
      this.menuClass = 'menu';
    } else {
      this.menuClass = 'menu-top-scroll';
    }

    // Si algún submenú está visible, agregar fondo blanco
    if (this.isDropdownVisibleVehicles || this.isDropdownVisibleEnergy || this.isDropdownVisibleCharging) {
      this.menuClass += ' menu-white-background';
    }
  }

  // Funcion para ignorar menu en /desing
  isDesignRoute(): boolean {
    return this.router.url === '/design';
  }
}



