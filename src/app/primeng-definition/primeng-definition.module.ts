import { NgModule } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    PanelMenuModule,
    SlideMenuModule,
    MenubarModule
  ],
  exports:[
    PanelMenuModule,
    SlideMenuModule,
    MenubarModule
  ]
})
export class PrimengDefinitionModule { }
