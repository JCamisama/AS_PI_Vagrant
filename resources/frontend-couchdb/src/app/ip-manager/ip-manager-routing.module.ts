import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpReceptorPageComponent } from './ip-receptor-page/ip-receptor-page.component';

const routes: Routes = [
  { path: '', component: IpReceptorPageComponent, data: {title: 'Enter IP'} },
  { path: '**', redirectTo: '/ip-receiver', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpManagerRoutingModule { }
