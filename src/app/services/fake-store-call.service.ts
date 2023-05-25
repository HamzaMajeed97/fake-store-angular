import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class FakeStoreCallService {
  baseUrl = environment.PRODUCTS_URL;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
