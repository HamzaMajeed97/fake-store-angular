import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = environment.CART_URL;

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get<any>(this.baseUrl);
  }
}
