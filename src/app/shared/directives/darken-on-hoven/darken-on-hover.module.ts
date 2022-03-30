import { DarkenOnHoverDirective } from './darken-on-hoven.directive';
import { NgModule } from "@angular/core";


@NgModule({
  declarations:[
    DarkenOnHoverDirective
  ],
  exports:[
    DarkenOnHoverDirective
  ]
})
export class DarkenOnHoverModule {

}
