import { NgModule } from '@angular/core';
import { SingupComponent } from './singup/singup.component';
import { SiginComponent } from './sigin/sigin.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '', component: SiginComponent,

      },
      {
        path: 'singup', component:SingupComponent
      }
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
