import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from './new-user.model';

const API = environment.api

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient) { }

  checkUserNameTaken(userName:string){
    return this.http.get(`${API}/user/exists/${userName}`);
  }

  singup(newUser: NewUser){
    return this.http.post(`${API}/user/signup`, newUser)
  }

}
