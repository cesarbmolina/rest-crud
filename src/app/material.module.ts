import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatTableModule

} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule
  ]
})
export class MaterialModule { }
