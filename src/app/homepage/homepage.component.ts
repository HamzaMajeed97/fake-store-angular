import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <p>homepage works!</p>
    <app-productlist></app-productlist>
  `,
  styles: [],
})
export class HomepageComponent implements OnInit {
  products: any;

  constructor() {}

  ngOnInit(): void {}
}
