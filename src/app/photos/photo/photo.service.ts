import { environment } from './../../../environments/environment';
import { Photo } from './photos.model';
import { HttpClient, HttpParams,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = environment.api

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient ) { }

  listar(username: string): Observable<Photo[]>{
    return this.http.get<Photo[]>(`${API}/${username}/photos`)
  }

  listarPaginacao(username: string, page:number): Observable<Photo[]>{
    const params = new HttpParams().append('page', page.toString())
    return this.http.get<Photo[]>(`${API}/${username}/photos`, {params})
  }

  upload(descrption:string, allowComments: boolean, file: File){

    const formData = new FormData();
    formData.append('description', descrption)
    formData.append('allowComments', allowComments ? 'true' : 'false')
    formData.append('imageFile', file)
    return this.http.post(`${API}/photos/upload`, formData)
  }
}
