import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {

  constructor(private http: HttpClient) { }

  postlogin(data: any) {
    console.log('data',data);
    return this.http.post("https://crusher.vitasoft.in/login/check", data)
  }
  getProduct(){
    return this.http.get("https://crusher.vitasoft.in/price/products");
  }
  getQuantity(){
  return  this.http.get("https://crusher.vitasoft.in/price/quantity");
  }
  getPricelist(){
   return this.http.get("https://crusher.vitasoft.in/price/pricelist");
  }
}
