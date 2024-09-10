import { Component, OnInit } from '@angular/core';
import { ChargingService } from '../services/charging.service';

@Component({
   selector: 'app-charging',
   templateUrl: './charging.component.html',
   styleUrls: ['./charging.component.css']
})
export class ChargingComponent implements OnInit {
   chargingItems: any[] = [];

   constructor(private chargingService: ChargingService) { }

   ngOnInit(): void {
      this.chargingService.getCharging().subscribe(data => {
         this.chargingItems = data;
      });
   }
}

