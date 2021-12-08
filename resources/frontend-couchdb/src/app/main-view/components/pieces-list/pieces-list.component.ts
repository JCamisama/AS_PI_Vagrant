import { Component, OnInit } from '@angular/core';
import { Piece } from '../../models/interfaces';
import { PieceHandlerService } from '../../services/piece-handler.service';

@Component({
  selector: 'app-pieces-list',
  templateUrl: './pieces-list.component.html',
  styleUrls: ['./pieces-list.component.scss']
})
export class PiecesListComponent implements OnInit {
 
  public listOfPieces: Piece[] = [];

  constructor(
    private _pieceHandler: PieceHandlerService
  ) { }

  ngOnInit(): void {
    this._pieceHandler.getPieces()
      .subscribe( (pieces: Piece[]) => this.listOfPieces = pieces);
  }

  public removePiece(piece: Piece): void {
    this._pieceHandler.removePiece(piece);
  }

}
