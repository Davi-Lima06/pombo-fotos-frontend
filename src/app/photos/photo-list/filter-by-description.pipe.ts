import { Photo } from './../photo/photos.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescripstion',
})
export class FilterByDescription implements PipeTransform {
  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
      .trim()
      .toLowerCase();

      if(descriptionQuery){
        return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery))
      }else{
        return photos;
      }
  }
}
