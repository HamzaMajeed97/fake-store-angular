import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  template: ` <div>Cart {{ quantity }}</div> `,

  styles: [],
})
export class CartComponent implements OnInit {
  quantity = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCart();
  }

  addToCart() {
    this.quantity++;
  }

  getCart() {
    this.cartService.getCart().subscribe((data) => {
      console.log(data);
    });
  }
}
