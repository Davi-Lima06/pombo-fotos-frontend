import { SingupService } from './singup.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserNotTakenService {

  constructor(private singupService: SingupService) { }

  checkUsedNameTaken(){
    return (control: AbstractControl) => {
      return control.valueChanges
      .pipe(debounceTime(300))
      .pipe(
        switchMap((userName) =>
          this.singupService.checkUserNameTaken(userName))
        ,
        map((isTaken: any) => isTaken ? { userNameTaken: true} : null),
        first()
      )
    }
  }
}
