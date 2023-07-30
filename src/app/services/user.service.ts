import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    baseUrl = environment.USERS_URL;
    constructor(private http: HttpClient) {}

    getAllUsers() {
        return this.http.get<User[]>(this.baseUrl);
    }
}
