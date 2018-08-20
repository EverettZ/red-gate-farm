import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: []
})
export class AdminModule { }
