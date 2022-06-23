import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../film';

@Component({
  selector: 'app-film-service',
  templateUrl: './film-service.component.html',
  styleUrls: ['./film-service.component.css'],
})
export class FilmServiceComponent implements OnInit {
  constructor(private http: HttpClient) {}

  films: Film[] = [];

  ngOnInit(): void {
    this.http
      .get('http://localhost:3000/films')
      .subscribe((res?: Film[] | any) => {
        this.films = res;
        console.log(this.films);
        console.log(this.films[0]['titre']);
        console.log(this.films[0]['description']);
        console.log(this.films[0]['note']);
      });
  }

  //
}
