import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {

      let auth = false;
      this.auth.getUser().then((user) => {
        if (!user) {
          // redirect the user
          this.router.navigate(['/login']);
          auth = false;
        }
        else{
          auth = true;
        }

      });
      return auth;
  }

}
