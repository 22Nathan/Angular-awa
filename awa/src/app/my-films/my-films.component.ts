import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css'],
})
export class MyFilmsComponent implements OnInit {
  // @Input() films?: Film | any;

  films: Film[] | any = [];

  constructor(private filmService: FilmService) {}

  // ngOnInit(): void {
  //   this.films = this.filmService.getFilms();
  //   console.log(this.filmService.getFilms());
  // }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((films) => {
      this.films = films;

    });
  }
}
