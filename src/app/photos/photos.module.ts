import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoFormModule } from './photo-form/Photo-form.module';
import { NgModule } from '@angular/core';
import { PhotosService } from './photo/photo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [

    HttpClientModule,
    PhotoFormModule,
    PhotoListModule,

  ],
  providers:[
    PhotosService
  ]
})
export class PhotosModule { }
