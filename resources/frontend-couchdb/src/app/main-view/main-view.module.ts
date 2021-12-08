import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainViewRoutingModule } from './main-view-routing.module';
import { MainPanelComponent } from './pages/main-panel.component';
import { PiecesListComponent } from './components/pieces-list/pieces-list.component';
import { AddPieceBarComponent } from './components/add-piece-bar/add-piece-bar.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PieceHandlerService } from './services/piece-handler.service';
import { RouterModule } from '@angular/router';
import { AddPieceFormComponent } from './components/add-piece-form/add-piece-form.component';


@NgModule({
  declarations: [
    MainPanelComponent,
    PiecesListComponent,
    AddPieceBarComponent,
    AddPieceFormComponent
  ],
  imports: [
    CommonModule,
    MainViewRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    PieceHandlerService
  ]
})
export class MainViewModule { }
