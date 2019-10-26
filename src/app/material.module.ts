import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule

} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
