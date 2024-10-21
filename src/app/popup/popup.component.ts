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
      title: 'All-Wheel Drive',
      description: 'With 2200 x 1300 resolution, true colors and exceptional responsiveness, an adjustable 17” display tilts left or right for gaming, movies and more. A second display in front of the driver features the most essential vehicle driver information, including Full Self-Driving Visualization, while a third display second-row screen provides even more entertainment and control for rear passengers. All-Wheel Drive uses independent front and rear motors for improved performance and traction in all conditions, enabling lightning-fast response from the accelerator pedal. Unlike traditional engines, Tesla’s motors and powertrain require no scheduled maintenance for the lifetime of ownership.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/S_AWD.jpeg?'
    },
    {
      title: 'Basic Autopilot',
      description: 'Included with every new Tesla, Autopilot enables your car to steer, accelerate and brake automatically for other vehicles and pedestrians within its lane. There to assist with the most burdensome parts of driving, Autopilot works alongside features like emergency braking, collision warning and blind-spot monitoring.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/S3XY_StdFeat_Autopilot.jpg?'
    },
    {
      title: 'Easy Charging',
      description: 'Charge anywhere there is electricity. Most range used for daily driving can be topped off using the 110V Mobile Connector Bundle, or upgrade to a 220V Tesla Wall Connector for the best home charging experience. For long drives, Model S adds up to 200 miles of range in just 15 minutes on Tesla’s Supercharger network.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/Chargeport_SX.jpg?'
    },
    {
      title: 'Sentry Mode',
      description: 'Continuous 360° monitoring protects your Tesla when left unattended. Enabling Sentry Mode activates a “Standby” state, like many home alarm systems, which uses the cars external cameras to help detect and protect against potential threats. All-new Live Camera, available with Premium Connectivity, lets you remotely view your cars surroundings while in park, and also honk, flash and talk through the cars speaker. Live Camera is end-to-end encrypted and cannot be accessed by Tesla..',
      image: 'assets/images/Homepage-Accessories-Desktop-US.png'
    },
    {
      title: 'Adaptive Suspension',
      description: 'Model S’ adaptive suspension reacts to road conditions and driver inputs hundreds of times per second to deliver exceptional ride quality and handling. The system also automatically adjusts ride height for greater comfort and to keep Model S in its most aerodynamic setting for maximum range.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/S_Suspension.jpeg?'
    },
    {
      title: 'Real Storage',
      description: 'Model S features 28 ft³ of cargo space, including a secure front trunk, with space for 5 adults. The front trunk can fit a full-size carry-on suitcase, and the rear seats can fold flat at the press of a button, opening up the rear cargo area and under-floor storage for maximum flexibility to fit any lifestyle.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/S_Expansive_Storage.jpeg?'
    },
    {
      title: 'Tesla Mobile App',
      description: 'Remotely control and monitor your Tesla with Phone Key keyless driving, range & charging status, climate control, live GPS location and more. You can even schedule service and monitor your entire Tesla ecosystem, including power flow from Powerwall or from Solar Roof and Solar Panels.',
      image: 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODELS/UI/Model_S_mobile_app.jpeg?'
    }
  ];

  openPopup() {
    this.isPopupOpen = true;
    this.currentIndex = 0;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  slide(shift: number) {
    const nextIndex = this.currentIndex + shift;
  
    if (nextIndex >= 0 && nextIndex < this.cards.length) {
      this.currentIndex = nextIndex;
    }
  }
  
  
}
