import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../film';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}
  films: Film[] | any = [];

  getFilms() {
    this.http
      .get('http://localhost:3000/films')
      .subscribe((res?: Film[] | any) => {
        this.films = res;

        console.log(this.films);
        // console.log(this.films[0]['titre']);
        // console.log(this.films[0]['description']);
        // console.log(this.films[0]['note']);

        return this.films;

        //return res;
      });
  }
}
