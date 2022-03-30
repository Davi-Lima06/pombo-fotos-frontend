import { Router } from '@angular/router';
import { PhotosService } from './../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  formGroup!: FormGroup
  file!: File

  constructor(
    private formBuilder: FormBuilder,
    private fotoService: PhotosService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      file:['', Validators.required],
      description:['', Validators.maxLength(300)],
      allowComments:[true]
    })
  }

  upload(){
    const description = this.formGroup.get('description')?.value
    const allowComments = this.formGroup.get('allowComments')?.value
    this.fotoService.upload(description, allowComments, this.file).subscribe(
      () => this.router.navigate(['']),
      (err) => console.log(err)
    )

  }

  uploadFoto(target: any) {
    if(target instanceof EventTarget) {
      let element = target as HTMLInputElement;
      let files = element.files
      if (files) {
        this.file = files[0]
      }
    }
}

}
