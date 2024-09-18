import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class CarService {
   private apiUrl = 'http://localhost:5000/api/car'; //URL API

   constructor(private http: HttpClient) { }

   getCars(): Observable<any> {
      return this.http.get(this.apiUrl);
   }

   addCar(car: any): Observable<any> {
      return this.http.post(this.apiUrl, car);
   }
}
