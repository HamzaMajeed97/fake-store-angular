import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FakeStoreCallService } from '../services/fake-store-call.service';

@Component({
    selector: 'app-cartdetails',
    template: `
        <table mat-table [dataSource]="product" class="mat-elevation-z8">
            <!--- Note that these columns can be defined in any order.
      The actual rendered columns are set as a property on the row definition" -->

            <mat-icon class="delete-icon">delete</mat-icon>
            <!-- Name Column -->
            <ng-container matColumnDef="product">
                <th mat-header-cell *matHeaderCellDef>
                    {{ 'product' | uppercase }}
                </th>
                <td mat-cell *matCellDef="let product">{{ product.title }}</td>
            </ng-container>

            <!-- Weight Column -->
            <ng-container matColumnDef="unit-price">
                <th mat-header-cell *matHeaderCellDef>
                    {{ 'unit price' | uppercase }}
                </th>
                <td mat-cell *matCellDef="let product">
                    {{ product.price | currency : 'USD' }}
                </td>
            </ng-container>

            <!-- Symbol Column -->
            <ng-container matColumnDef="quantity">
                <th mat-header-cell *matHeaderCellDef>
                    {{ 'quantity' | uppercase }}
                </th>
                <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
            </ng-container>

            <ng-container matColumnDef="total">
                <th mat-header-cell *matHeaderCellDef>
                    {{ 'total' | uppercase }}
                </th>
                <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
            </ng-container>

            <ng-container matColumnDef="remove">
                <th mat-header-cell *matHeaderCellDef>
                    {{ 'remove' | uppercase }}
                </th>
                <td mat-cell *matCellDef="let element">
                    <mat-icon class="delete-icon">delete</mat-icon>
                </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
        </table>
    `,
    styles: [
        `
            table {
                width: 100%;
                margin-top: 2rem;
            }

            .delete-icon {
                cursor: pointer;
                color: red;
            }
        `,
    ],
})
export class CartdetailsComponent implements OnInit {
    product: Product[] = [];

    displayedColumns: string[] = [
        'product',
        'unit-price',
        'quantity',
        'total',
        'remove',
    ];

    constructor(private productService: FakeStoreCallService) {}

    ngOnInit(): void {
        this.getItems();
    }

    getItems() {
        this.productService.getAll().subscribe((data: Product[]) => {
            this.product = data;
            console.log(this.product);
        });
    }
}
