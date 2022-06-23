import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyFilmsComponent } from './my-films/my-films.component';

const routes: Routes = [
  // {
  //   path: '/',
  //   component: AppComponent,
  // },
  // {
  //   path: '/myFilms',
  //   component: MyFilmsComponent,
  // },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
