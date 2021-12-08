import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpManagerRoutingModule } from './ip-manager-routing.module';
import { IpReceptorPageComponent } from './ip-receptor-page/ip-receptor-page.component';
import { IpDialogComponent } from './components/ip-dialog/ip-dialog.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IpReceptorPageComponent,
    IpDialogComponent
  ],
  imports: [
    CommonModule,
    IpManagerRoutingModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ]
})
export class IpManagerModule { }
