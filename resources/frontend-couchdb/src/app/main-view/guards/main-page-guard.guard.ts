import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IpReceiverService } from '../../ip-manager/services/ip-receiver.service';

@Injectable({
  providedIn: 'root'
})
export class MainPageGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _ipReceiver: IpReceiverService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._ipReceiver.isDatabaseConnected()) {
      console.log('is database connected: ', this._ipReceiver.isDatabaseConnected());
      return true;
    }
    else {
      console.log('is database connected: ', this._ipReceiver.isDatabaseConnected());
      this._router.navigate(['/ip-receiver']);
      return false;
    }
  }
  
}
