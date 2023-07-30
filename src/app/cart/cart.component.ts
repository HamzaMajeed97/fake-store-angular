import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-cart',
    template: `
        <div class="cartDetails" routerLink="cartdetails">
            Cart {{ counter }}
        </div>
    `,

    styles: [
        `
            .cartDetails {
                cursor: pointer;
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
