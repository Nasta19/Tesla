import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class EnergyService {
   private apiUrl = 'http://localhost:5000/api/energy';

   constructor(private http: HttpClient) { }

   getEnergy(): Observable<any> {
      return this.http.get(this.apiUrl);
   }

   addEnergy(energy: any): Observable<any> {
      return this.http.post(this.apiUrl, energy);
   }
}
