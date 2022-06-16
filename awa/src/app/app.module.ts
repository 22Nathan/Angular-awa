import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddOrEdditFilmComponent } from './add-or-eddit-film/add-or-eddit-film.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [AppComponent, AddOrEdditFilmComponent, MyFilmsComponent, FilmDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
