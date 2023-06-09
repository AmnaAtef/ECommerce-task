import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { 
    path: '', 
    loadChildren: () =>
    import('./account/account.module').then( 
      (m) => m.AccountModule
    )
  },
  { 
    path: '', 
    loadChildren: () =>
    import('./pages/pages.module').then( 
      (m) => m.PagesModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
