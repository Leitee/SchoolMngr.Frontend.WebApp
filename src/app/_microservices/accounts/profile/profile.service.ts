import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiBaseService } from '@/_core/backend/api/api-base.service';
import { User } from '@/_core/backend/interfaces/users';


@Injectable({ providedIn: 'root' })
export class AccountService extends ApiBaseService<User> {

    constructor(http: HttpClient) {
        super(http, null);
    }

    getAllUsers() {
        this.path = 'account/users';
        return this.getAll();
    }

    getUserById(id: number) {
        this.path = 'account/users'
        return this.getSingleById(id);
    }
}