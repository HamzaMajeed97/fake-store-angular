import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private counter = 0;
    cart: Cart[] = [];

    counterChanged = new Subject<number>();

    cartWithProducts = new Subject<any>();

    incrementCounter() {
        this.counter++;
        this.counterChanged.next(this.counter);
        this.cartWithProducts.next(this.cart);
    }

    decrementCounter() {
        if (this.counter > 0) {
            this.counter--;
            this.counterChanged.next(this.counter);
        }
    }
}
