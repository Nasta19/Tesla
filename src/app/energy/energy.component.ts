import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../services/energy.service';

@Component({
   selector: 'app-energy',
   templateUrl: './energy.component.html',
   styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements OnInit {
   energyItems: any[] = [];

   constructor(private energyService: EnergyService) { }

   ngOnInit(): void {
      this.energyService.getEnergy().subscribe(data => {
         this.energyItems = data;
      });
   }
}

