import { Injectable } from '@angular/core';
import { IUser } from '../../types/user.interface';

@Injectable()
export class UserService {
  users: IUser[] = [];

  addIUser(user: IUser) {
    this.users = [...this.users, user];
  }

  removeUser(userId: string) {
    this.users = this.users.filter((u) => u.id !== userId);
  }
}
