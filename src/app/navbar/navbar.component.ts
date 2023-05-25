import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-sidenav-container>
      <mat-sidenav>
        <mat-nav-list>
          <a mat-list-item routerLink="/"><mat-icon>home</mat-icon> Home</a>
          <a mat-list-item routerLink="/"><mat-icon>info</mat-icon> About</a>
          <a mat-list-item routerLink="/"><mat-icon>mail</mat-icon> Contact</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar routerLink="/" color="primary">
          <span>Fake Store</span>
        </mat-toolbar>
        <!-- Main content goes here -->
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      mat-sidenav-container {
        height: 80px;
        border: 2px solid black;
        background-color: pink;
      }

      mat-nav-list {
        display: flex;
      }

      mat-sidenav {
        width: 200px;
      }

      mat-toolbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        cursor: pointer;
      }

      mat-sidenav-content {
        margin-top: 64px; /* adjust this value according to the toolbar height */
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
