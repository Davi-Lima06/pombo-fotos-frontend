
import { ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlatformService } from 'src/app/core/platform-detector/platform.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput?: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platDetectorService: PlatformService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    });
    this.platDetectorService.isPlatformBrowser() &&
            this.userNameInput?.nativeElement.focus();
  }

  login(){
    const userName = this.loginForm.get('userName')?.value
    const password = this.loginForm.get('password')?.value

    this.authService.authenticate(userName, password)
      .subscribe(() => this.router.navigate([`user/${userName}`]),
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platDetectorService.isPlatformBrowser() &&
            this.userNameInput?.nativeElement.focus();
        alert('senha ou usuario inválidos')
      })
  }

}
