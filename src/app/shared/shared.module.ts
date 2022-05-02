import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Materiales
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {ThousandPointPipe} from './pipes/thousand-point-pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginatorIntlSpa} from './custom-material/mat-paginator-spa';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

//Cropper 
import { AngularCropperjsModule } from 'angular-cropperjs'

// mat-video
import { MatVideoModule } from 'mat-video';

//Requerido para utlizar DATE PICKER
import { MatNativeDateModule } from '@angular/material/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';

// PDFS, ng2-pdf-viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';

//@techiediaries/ngx-qrcode 
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

//dropzone Input multiple Files
import { NgxDropzoneModule } from 'ngx-dropzone';

//List Custom
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

const MAT_IMPORTS = [
  MatCheckboxModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatBadgeModule,
  MatCardModule,
  MatDialogModule,
  MatSelectModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSortModule,
  MatVideoModule,
  MatSlideToggleModule,
  PdfViewerModule,
  MatMenuModule,
  NgxQRCodeModule,
  NgxDropzoneModule,
  MatAutocompleteModule,
  NgxMatSelectSearchModule,
  MatChipsModule,
  AngularCropperjsModule,
  NgxSliderModule
];

@NgModule({
  declarations: [
    ThousandPointPipe
  ],
  imports: [
    ...MAT_IMPORTS,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...MAT_IMPORTS,
    ThousandPointPipe,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlSpa}
  ],
  entryComponents: []
})
export class SharedModule { }
