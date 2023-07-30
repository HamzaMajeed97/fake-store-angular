import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Cart } from '../models/cart';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private counter = 0;

    counterChanged = new Subject<number>();

    cartWithProducts = new Subject<Cart>();

    incrementCounter() {
        this.counter++;
        this.counterChanged.next(this.counter);
    }

    decrementCounter() {
        if (this.counter > 0) {
            this.counter--;
            this.counterChanged.next(this.counter);
        }
    }
}
