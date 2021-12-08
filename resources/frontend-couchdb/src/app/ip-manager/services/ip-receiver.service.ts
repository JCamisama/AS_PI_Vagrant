import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpReceiverService {

  private _dbIpAddres: string = '';
  private _isConnectedToDatabase: boolean = false;

  constructor(
    private _http: HttpClient
  ) { }

  public checkConnectionToDatabaseApi(ip: string): Observable<boolean> {
 
    const url: string = `${environment.SERVER.protocol}://${ip}:${environment.SERVER.port}`;
    return this._http.get(url).pipe(
      timeout(5000),
      map( resp => {
        this._isConnectedToDatabase = true;
        this._dbIpAddres = ip;
        return true;
      }),
      catchError( () => {
        this._isConnectedToDatabase = false;
        return of(false);
      }));
  }

  public isDatabaseConnected(): boolean {
    console.log('ip addr:', this._dbIpAddres);
    return this._isConnectedToDatabase;
  }

  public getDatabaseIp(): string {
    return this._dbIpAddres;
  }

}
