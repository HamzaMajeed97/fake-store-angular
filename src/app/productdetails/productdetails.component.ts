import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreCallService } from '../services/fake-store-call.service';

@Component({
  selector: 'app-productdetails',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-6">
          <img
            [src]="product.image"
            alt="{{ product.title }}"
            class="img-fluid"
          />
        </div>
        <div class="col-6">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price | currency }}</p>
          <div class="input-group mb-3">
            <button
              (click)="decreaseQuantity()"
              class="btn btn-outline-secondary"
            >
              -
            </button>
            <input
              type="number"
              [(ngModel)]="quantity"
              min="1"
              max="10"
              class="form-control text-center"
            />
            <button
              (click)="increaseQuantity()"
              class="btn btn-outline-secondary"
            >
              +
            </button>
          </div>
          <button class="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductdetailsComponent implements OnInit {
  product!: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: FakeStoreCallService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {});
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    if (this.quantity < 10) this.quantity++;
  }
}
