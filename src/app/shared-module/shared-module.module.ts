import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class SharedModuleModule { }
