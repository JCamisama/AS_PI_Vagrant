import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PieceHandlerService } from '../../services/piece-handler.service';

@Component({
  selector: 'app-add-piece-form',
  templateUrl: './add-piece-form.component.html',
  styleUrls: ['./add-piece-form.component.scss']
})
export class AddPieceFormComponent implements OnInit {

  constructor(
    private _pieceHandler: PieceHandlerService,
    private _formBuilder: FormBuilder
  ) { }

  public currentValue: string = '';
  public hasChanged: boolean = false;
  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      name: ['', Validators.required ],
      composer: ['', Validators.required ]
    })
  }

  public addNewPiece() {
    if(this.myForm.valid) {
      this.hasChanged = true;
      const pieceName: string = this.myForm.get('name')?.value;
      const composer: string = this.myForm.get('composer')?.value;
      this._pieceHandler.addNewPiece(pieceName, composer);
    }
  }
}
