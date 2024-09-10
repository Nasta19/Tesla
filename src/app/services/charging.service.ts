import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ChargingService {
   private apiUrl = 'http://localhost:5000/api/charging';

   constructor(private http: HttpClient) { }

   getCharging(): Observable<any> {
      return this.http.get(this.apiUrl);
   }

   addCharging(charging: any): Observable<any> {
      return this.http.post(this.apiUrl, charging);
   }
}
