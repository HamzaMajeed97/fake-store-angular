import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CounterService {
    private counter = 0;

    counterChanged = new Subject<number>();

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
