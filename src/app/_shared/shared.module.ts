import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPipe } from './pipes';
import { NgxFilterByNumberComponent } from './components/custom-smart-table-components/filter-by-number/filter-by-number.component';
import { NgxValidationMessageComponent } from './components/validation-message/validation-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  NgxValidationMessageComponent,
  NgxFilterByNumberComponent,
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    ...COMPONENTS,
    AuthPipe,
  ],
  exports: [
    ...COMPONENTS,
    AuthPipe,
  ],
  entryComponents: [
    NgxFilterByNumberComponent,
  ],
})
export class SharedModule { }
