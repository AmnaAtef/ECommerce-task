import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

const MATERIAL_IMPORTS = [
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatButtonModule,
  MatBadgeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_IMPORTS
  ],
  exports: [
    ...MATERIAL_IMPORTS
  ]
})
export class MaterialImportsModule { }
