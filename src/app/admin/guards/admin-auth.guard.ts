import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class AdminAuthGuard implements CanActivate {
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  canLoad( route: Route ): boolean {
    return true;
  }

}
