import { Component } from '@angular/core';
import { Film } from './film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'awa';

  films: any[] = [];

  addOrUpdateFilm(film: Film) {
    this.films.push(film);
  }
}
