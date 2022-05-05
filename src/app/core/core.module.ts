import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsViewComponent } from './components/jobs-view/jobs-view.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { DialogConfirmComponent } from './components/dialogs/dialog-confirmation/dialog-confirm.component';

@NgModule({
  declarations: [
    JobsViewComponent,
    DialogConfirmComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // PdfViewerModule
  ],
  exports: [
    JobsViewComponent,
    DialogConfirmComponent
  ],
  providers: [CurrencyPipe]
})
export class CoreModule { }
