import { NgModule } from '@angular/core';
import {MatNativeDateModule, MatRippleModule} from '@angular/material';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatRadioModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}

