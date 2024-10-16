import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  isPopupOpen = false;
  currentIndex = 0;

  // Cards con contenido personalizado
  cards = [
    {
      title: 'Tesla Model S',
      description: 'Tesla All-Wheel Drive uses independent front and rear motors for improved performance and traction in all conditions, enabling lightning-fast response from the accelerator pedal. Unlike traditional engines, Tesla’s motors and powertrain require no scheduled maintenance for the lifetime of ownership.',
      image: 'assets/images/Homepage-Accessories-Desktop-US.png'
    },
    {
      title: 'Tesla Model 3',
      description: 'Affordable electric car with great performance.',
      image: 'assets/images/Homepage-Accessories-Desktop-US.png'
    },
    { title: 'Tesla Model X', 
      description: 'Electric SUV with falcon-wing doors.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
    { title: 'Tesla Model Y', 
      description: 'Compact SUV with advanced safety features.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
    { title: 'Tesla Model Y', 
      description: 'Compact SUV with advanced safety features.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
    { title: 'Tesla Model Y', 
      description: 'Compact SUV with advanced safety features.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
    { title: 'Tesla Model Y', 
      description: 'Compact SUV with advanced safety features.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
    { title: 'Tesla Model Y', 
      description: 'Compact SUV with advanced safety features.', 
      image: 'assets/images/Homepage-Accessories-Desktop-US.png' 
    },
  ];


  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  slide(shift: number) {
    const nextIndex = this.currentIndex + (shift > 0 ? 1 : -1);
    if (nextIndex >= 0 && nextIndex < this.cards.length) {
      this.currentIndex = nextIndex;
    }
  }
}
