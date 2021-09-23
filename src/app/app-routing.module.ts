import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from '@core/pages/main-page/main-page.component';
import {UndefinedPageComponent} from '@core/pages/undefined-page/undefined-page.component';



const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'login', loadChildren: () => import('@auth/auth.module').then((m) => m.AuthModule) },
  {
    path: 'category',
    loadChildren: () => import('@content/content.module')
      .then((m) => m.ContentModule),
  },
  { path: '404', component: UndefinedPageComponent},
  { path: '**',   redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
