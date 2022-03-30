import { PlatformService } from './../../core/platform-detector/platform.service';
import { SingupService } from './singup.service';
import { UserNotTakenService } from './user-not-taken.validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  signupForm!: FormGroup;
  @ViewChild('inputEmail') emailInput?: ElementRef<HTMLInputElement>;
  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenService: UserNotTakenService,
    private singupService: SingupService,
    private router: Router,
    private platDetectorService: PlatformService
    ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(4),
          Validators.maxLength(14),
        ],
        this.userNotTakenService.checkUsedNameTaken()
      ],
      password: ['', Validators.required],
    });
    this.platDetectorService.isPlatformBrowser() &&
            this.emailInput?.nativeElement.focus();
  }

  singup(){
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.singupService.singup(newUser)
      .subscribe(() => this.router.navigate(['']),
      (err) =>
        console.log(err)
      )
  }

}
