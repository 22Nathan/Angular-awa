import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css'],
})
export class EditFilmComponent {
  constructor(private service: FilmService) {}

  editFilmForm = new FormGroup({
    id: new FormControl(''),
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    note: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(5),
    ]),
  });

  updateFilm() {
    this.service.updateFilm(this.editFilmForm.value).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
    });
  }
}
