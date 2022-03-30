import { Router } from '@angular/router';
import { User } from './../user/user.model';
import { Observable } from 'rxjs';
import { UserService } from './../user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$?: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    this.user$ = userService.getUser();
   }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logOut();
    this.router.navigate([''])
  }

}
