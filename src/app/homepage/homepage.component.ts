import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homepage',
    template: `
        <app-user></app-user>
        <app-productlist></app-productlist>
    `,
    styles: [],
})
export class HomepageComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
