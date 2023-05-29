import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule,
  ],
  exports: [
    MaterialImportsModule,
  ]
})
export class SharedModule { }
