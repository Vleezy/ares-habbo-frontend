import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveSessionGuard implements CanActivateChild {
  constructor(private userService: UserService) { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, 
                   state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.userService.getUser().subscribe();
    return true;
  }
}