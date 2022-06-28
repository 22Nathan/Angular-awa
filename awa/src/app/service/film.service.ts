import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../film';
import { environment } from '../../environments/environment';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}
  films: Film[] | any = [];

  // getFilms() {
  //   this.http
  //     .get('http://localhost:3000/films')
  //     .subscribe((res: Film[] | any) => {
  //       this.films = res;

  //       // console.log(this.films);
  //       // console.log(this.films[0]['titre']);
  //       // console.log(this.films[0]['description']);
  //       // console.log(this.films[0]['note']);
  //     });
  // }

  getFilms() {
    return this.http.get<Film[] | any>(`${environment.api}/films`);
  }
  addFilms(data: any) {
    return this.http.post<any>(`${environment.api}/films`, data);
  }
  
}
