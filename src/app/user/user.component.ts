import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'app-user',
    template: ``,
    styles: [],
})
export class UserComponent implements OnInit {
    user: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUser();
    }

    getUser() {
        this.userService.getAllUsers().subscribe((data) => {
            this.user = data;
        });
    }
}
