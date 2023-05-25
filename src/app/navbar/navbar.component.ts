import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
@Component({
  selector: 'app-navbar',
  template: `
    <section class="navbar">
      <div>
        <div class="logo">
          <div routerLink="/">FAKE STORE</div>
        </div>

        <section class="cart">
          <app-cart></app-cart>
        </section>
      </div>
    </section>
  `,
  styles: [
    `
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        margin-bottom: 20px;
        height: 70px;
        border: 2px solid black;
        background-color: #9c27b0;
      }

      .logo {
        font-size: 20px;
        cursor: pointer;
      }

      mat-sidenav {
        width: 200px;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
