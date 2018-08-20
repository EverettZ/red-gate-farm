import { PublicComponent } from './public.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', redirectTo: 'home' },
      { path: 'home', component: HomeComponent }
    ]
  }
];

@NgModule( {
  imports: [ RouterModule.forChild( publicRoutes ) ],
  exports: [ RouterModule ]
} )
export class PublicRoutingModule { }
