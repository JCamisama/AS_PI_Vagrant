import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpManagerRoutingModule } from './ip-manager/ip-manager-routing.module';
import { MainPageGuard } from './main-view/guards/main-page-guard.guard';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./main-view/main-view-routing.module').then( (m) => m.MainViewRoutingModule),
    canActivate: [MainPageGuard] },
  { path: 'ip-receiver', loadChildren: () => import('./ip-manager/ip-manager-routing.module').then( (m) => m.IpManagerRoutingModule) },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
