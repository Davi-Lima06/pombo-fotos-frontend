import { Photo } from './../photo/photos.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { PhotosService } from './../photo/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
  constructor(private service: PhotosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<Photo[]>
    | Observable<Observable<Photo[]>>
    | Promise<Observable<Photo[]>> {
    const userName = route.params['userName'];

    return this.service.listarPaginacao(userName,1)
  }
}
