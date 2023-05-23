import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{ product.title }}</mat-card-title>
        <mat-card-subtitle>{{ product.category }}</mat-card-subtitle>
      </mat-card-header>
      <img class="img" mat-card-image [src]="product.image" />
      <mat-card-content> </mat-card-content>
      <mat-card-actions>
        <button [routerLink]="['/products', product.id]" mat-button>
          DETAILS
        </button>
        <button mat-button>ADD TO CART</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .example-card {
        min-width: 300px;
        padding: 20px;
        margin: 2rem;
      }

      .example-header-image {
        background-size: cover;
      }

      .img {
        aspect-ratio: 8/5;
      }
    `,
  ],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor() {}

  ngOnInit(): void {}

  goToDetails() {}
}
