import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-delete-film',
  templateUrl: './delete-film.component.html',
  styleUrls: ['./delete-film.component.css'],
})
export class DeleteFilmComponent {
  deleteFilmForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });

  constructor(private service: FilmService) {}

  deleteFilm() {
    this.service.deleteFilm(this.deleteFilmForm.value).subscribe({
      next: (res) => {
        window.location.reload();
      },

      error: (err) => {
        alert('error');
      },
    });
  }
}
