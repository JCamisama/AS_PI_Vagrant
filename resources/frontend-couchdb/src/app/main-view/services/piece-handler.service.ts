import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CouchDBResponse, PieceBackendModel, Piece, CouchDBDocumentRev } from '../models/interfaces';
import { IpReceiverService } from '../../ip-manager/services/ip-receiver.service';


@Injectable()
export class PieceHandlerService {

  private _listOfPieces: Piece[] = [];
  private _pieces$: BehaviorSubject<Piece[]>;
  public baseUrl: string = `${environment.SERVER.protocol}://${environment.SERVER.domain}:${environment.SERVER.port}`;


  constructor(
    private _http: HttpClient,
    private _ipReceiver: IpReceiverService
  ) {
    this._pieces$  = new BehaviorSubject(this._listOfPieces);
    this.baseUrl = `${environment.SERVER.protocol}://${this._ipReceiver.getDatabaseIp()}:${environment.SERVER.port}`;
    // this.baseUrl = `${environment.SERVER.protocol}://${environment.SERVER.domain}:${environment.SERVER.port}`;
    this._initializePieces();
  }

  public getPieces(): Observable<Piece[]> {
    return this._pieces$;
  }

  public addNewPiece(piece: string, composer: string): void  {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + btoa(`${environment.USER}:${environment.PASSWORD}`));
    const newPiece = {
      name: piece.toLowerCase(),
      composer: composer.toLowerCase()
    }
    const id = new Date().getMilliseconds().toString();
    const url: string = this.baseUrl + "/pieces/" + id;
    console.log(url);
    const response$ = this._http.put(url, newPiece, {headers: headers});
    response$.subscribe( resp => {
      console.log("The piece was added successfully, response: ", resp);
    });
    this._listOfPieces.push({...newPiece, id});

  }

  public removePiece(piece: Piece): void  {
    this._listOfPieces = this._listOfPieces.filter( currentPiece => currentPiece.name !== piece.name );
    this._pieces$.next(this._listOfPieces);

    this._removePieceFromDatabase(piece);
  }

  public saveInDatabase(): void {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + btoa("jcagudelo:jcagudelo"));
    // headers.set('Content-Type', 'application/json');
    // console.log('headers: ', headers);

    const response$ = this._http.put(this.baseUrl,{}, {headers: headers});
    // const response$ = this._http.put(this.url,{}, {headers: { "Authorization": "Basic "+ btoa("jcagudelo:jcagudelo")} });
      // const response$ = this._http.get(this.url, httpOptions);

    response$.subscribe( resp => {
      console.log('Received: ', resp);
    });
  }

  private _initializePieces(): void {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + btoa(`${environment.USER}:${environment.PASSWORD}`));
    const url: string = this.baseUrl + "/pieces/_design/pieces/_view/byName";
    const response$ = this._http.get<CouchDBResponse>(url)
      .pipe(catchError( () => {
        return this._initializeDatabase(url);
      }));

    response$.subscribe( resp => {
      this._listOfPieces = resp.rows.map( (pieceBackendFormat: PieceBackendModel) => {
        const piece: Piece = {
          id: pieceBackendFormat.id,
          name: pieceBackendFormat.key,
          composer: pieceBackendFormat.value
        };
        return piece;
      });
      this._pieces$.next(this._listOfPieces);
    });
  }

  private _removePieceFromDatabase(piece: Piece): void {

    const url: string = this.baseUrl + "/pieces/" + piece.id;
    this._http.get<CouchDBDocumentRev>(url).pipe(
      switchMap( (resp: CouchDBDocumentRev) => this._http.delete(url + '?rev=' + resp._rev)))
      .subscribe( resp => {
        console.log("Succesfully erased, response: ", resp);
      });
  }


  private _initializeDatabase(objectiveUrl: string): Observable<CouchDBResponse> {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", "Basic " + btoa(`${environment.USER}:${environment.PASSWORD}`));
    const url: string = this.baseUrl + "/pieces";

    return this._http.put(url,{}, {headers: headers})
      .pipe( switchMap( () => this._http.post(url,environment.DATABASE_DESIGN, {headers: headers}) ),
             switchMap( () => this._http.get<CouchDBResponse>(objectiveUrl))
      );


  }
}
