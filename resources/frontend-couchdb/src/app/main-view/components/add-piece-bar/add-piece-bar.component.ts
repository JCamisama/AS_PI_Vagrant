import { Component, OnInit } from '@angular/core';
import { PieceHandlerService } from '../../services/piece-handler.service';

@Component({
  selector: 'app-add-piece-bar',
  templateUrl: './add-piece-bar.component.html',
  styleUrls: ['./add-piece-bar.component.scss']
})
export class AddPieceBarComponent implements OnInit {

  constructor(
    private _pieceHandler: PieceHandlerService
  ) { }

  public currentValue: string = '';
  public hasChanged: boolean = false;

  ngOnInit(): void {

  }

  public addNewPiece() {
    if(this.currentValue) {
      this.hasChanged = true;
      this._pieceHandler.addNewPiece(this.currentValue, 'Unknown');
    }
  }

}
