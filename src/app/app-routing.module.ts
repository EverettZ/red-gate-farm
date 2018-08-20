import { SelectivePreloadingStrategy } from './shared/selective-preloading-strategy/selective-preloading-strategy';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard } from './admin/guards/admin-auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './public/public.module#PublicModule', data: { preload: true } },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canLoad: [ AdminAuthGuard ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, { preloadingStrategy: SelectivePreloadingStrategy } ) ],
  exports: [ RouterModule ],
  providers: [
    SelectivePreloadingStrategy
  ]
} )
export class AppRoutingModule { }
