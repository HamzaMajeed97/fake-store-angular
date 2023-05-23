import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FakeStoreCallService } from '../services/fake-store-call.service';

@Component({
  selector: 'app-productlist',
  template: `
    <section class="product-list">
      <app-product *ngFor="let products of productList" [product]="products">
      </app-product>
    </section>
  `,
  styles: [
    `
      .product-list {
        display: grid;
        column-gap: 14px;
        row-gap: 14px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 400px));
        margin-top: 50px;
        justify-content: space-around;
      }
    `,
  ],
})
export class ProductlistComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: FakeStoreCallService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((data) => {
      this.productList = data;
      console.log(this.productList);
    });
  }
}
