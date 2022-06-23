import { Component } from '@angular/core';
import { Film } from './film';
import { FilmService } from './film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'awa';

  films: Film[] = [];

  addOrUpdateFilm(film: Film) {
    this.films.push(film);
  }
}
