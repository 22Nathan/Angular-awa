import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFilmsComponent } from './my-films/my-films.component';

const routes: Routes = [
  {
    path: '/',
    component: MyFilmsComponent,
  },
  {
    path: '/myFilms',
    component: MyFilmsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
