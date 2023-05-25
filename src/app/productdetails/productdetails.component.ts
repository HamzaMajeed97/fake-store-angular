import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreCallService } from '../services/fake-store-call.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-productdetails',
  template: `
    <div class="">
      <div class="">
        <div class="">
          <img src="{{ product.image }}" alt="{{ product.title }}" class="" />
        </div>
        <div class="">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p>Price: {{ product.price | currency }}</p>
          <div class="input-group mb-3">
            <button (click)="decreaseQuantity()">-</button>
            <input
              type="number"
              [(ngModel)]="quantity"
              min="1"
              max="10"
              class="form-control text-center"
            />
            <button (click)="increaseQuantity()">+</button>
          </div>
          <button mat-button color="primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ProductdetailsComponent implements OnInit {
  product!: Product;
  quantity: number = 1;
  cart: Cart[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: FakeStoreCallService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.productService.getById(id).subscribe((data) => {
        this.product = data;
        console.log(data);
      });
    });
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
