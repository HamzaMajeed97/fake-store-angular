import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FakeStoreCallService } from '../services/fake-store-call.service';

@Component({
  selector: 'app-productlist',
  template: `
    <app-product *ngFor="let products of productList" [product]="products">
    </app-product>
  `,
  styles: [],
})
export class ProductlistComponent implements OnInit {
  productList: Product[] = [];

  constructor(private callService: FakeStoreCallService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.callService.getAll().subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    });
  }
}
