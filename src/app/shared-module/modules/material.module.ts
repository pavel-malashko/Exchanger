
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatSnackBarModule,
  MatSelectModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports: [
    // MatButtonModule,
    // MatMenuModule,
    // MatIconModule,
    // MatCardModule,
    // MatSliderModule,
    // MatProgressBarModule,
    // MatAutocompleteModule,
    // MatSnackBarModule,
    // MatProgressSpinnerModule,
    // MatTooltipModule,
    // MatListModule,
    // MatDialogModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})

export class MaterialModule {
}
