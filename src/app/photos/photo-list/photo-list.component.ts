import { PhotosService } from './../photo/photo.service';
import { Photo } from './../photo/photos.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private service: PhotosService,
    private activatedRouter: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.userName = this.activatedRouter.snapshot.params['userName'];
    this.photos = this.activatedRouter.snapshot.data['photos'];

  }


  load(){
    this.service.listarPaginacao(this.userName,++this.currentPage)
      .subscribe(photos => {
        this.filter = ''
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false

      })
  }

  // valor(evento: KeyboardEvent){
  //   this.filter = (<HTMLInputElement>evento.target).value;
  //   console.log(this.filter)
  // }

}
