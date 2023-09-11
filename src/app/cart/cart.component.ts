import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart',
    template: `
        <div class="cartDetails" routerLink="cartdetails">
            <mat-icon>shopping_cart</mat-icon>{{ counter }}
        </div>
    `,

    styles: [
        `
            .cartDetails {
                cursor: pointer;
                background-color: #ffc0cb;
                border: 1px solid #d8b8b0;
                padding: 5px 10px;
                width: fit-content;
            }
        `,
    ],
})
export class CartComponent implements OnInit {
    counter = 0;

    counterSubscription!: Subscription;

    constructor(
        private cartService: CartService,
        private counterService: CounterService
    ) {}

    ngOnInit(): void {
        this.counterSubscription = this.counterService.counterChanged.subscribe(
            (counter: number) => {
                this.counter = counter;
            }
        );
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.counterSubscription.unsubscribe();
    }

    getCart() {
        this.cartService.getCart().subscribe((data) => {
            console.log(data);
        });
    }
}
