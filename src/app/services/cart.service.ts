import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = environment.CART_URL;

  constructor(private http: HttpClient) {}

  getCart() {
    return this.http.get<Cart>(this.baseUrl);
  }

  addToCart(body: Cart) {
    return this.http.post<Cart>(this.baseUrl, body);
  }
}
