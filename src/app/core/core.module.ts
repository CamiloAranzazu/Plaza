import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsViewComponent } from './components/jobs-view/jobs-view.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    JobsViewComponent
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
  ],
  providers: [CurrencyPipe]
})
export class CoreModule { }
