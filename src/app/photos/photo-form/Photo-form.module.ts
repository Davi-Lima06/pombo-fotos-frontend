import { RouterModule } from '@angular/router';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from "@angular/core";


@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ]
})
export class PhotoFormModule {}
