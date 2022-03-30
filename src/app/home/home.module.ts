import { RouterModule } from '@angular/router';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginComponent } from './sigin/sigin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [
    SiginComponent,
    SingupComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
