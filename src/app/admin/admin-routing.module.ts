import { AdminAuthGuard } from './guards/admin-auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ AdminAuthGuard ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( adminRoutes ) ],
  exports: [ RouterModule ],
  providers: [ AdminAuthGuard ]
} )
export class AdminRoutingModule { }
