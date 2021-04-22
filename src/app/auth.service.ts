import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  secret: string;
  constructor() {
    this.secret = 'topSecret';
  }

  public async getUser(): Promise<User | null> {
    const str = localStorage.getItem('user');
    if (!str){
      return null;
    }
    return await JSON.parse(str);
  }

  login(user: User): void {
    if (user.userName === 'bob' && user.password === 'myPassword'){
      localStorage.setItem('user', JSON.stringify(user));
    }
  }
}
