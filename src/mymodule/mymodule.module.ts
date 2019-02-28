import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTempComponent} from './select-temp/select-temp.component'
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
     SelectTempComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule

  ],
  exports:[
    SelectTempComponent,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class MymoduleModule { }
