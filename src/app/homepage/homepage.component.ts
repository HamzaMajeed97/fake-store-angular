import { Component, OnInit } from '@angular/core';
import { FakeStoreCallService } from '../services/fake-store-call.service';

@Component({
  selector: 'app-homepage',
  template: ` <p>homepage works!</p> `,
  styles: [],
})
export class HomepageComponent implements OnInit {
  products: any;

  constructor() {}

  ngOnInit(): void {}
}
