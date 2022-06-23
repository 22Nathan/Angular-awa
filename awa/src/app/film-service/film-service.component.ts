import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-service',
  templateUrl: './film-service.component.html',
  styleUrls: ['./film-service.component.css'],
})
export class FilmServiceComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/users').subscribe(res => {
      console.log('res', res)
    })
  }
}
