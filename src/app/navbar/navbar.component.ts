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
                <app-cart></app-cart>
                <section class="cart"></section>
            </div>
        </section>
    `,
    styles: [
        `
            .navbar {
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
                margin-bottom: 20px;
                height: 50px;
                padding: 15px;
                border: 2px solid black;
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
