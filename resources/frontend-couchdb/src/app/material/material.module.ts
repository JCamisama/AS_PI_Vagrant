import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'; 


@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule
  ],
})
export class MaterialModule {}
