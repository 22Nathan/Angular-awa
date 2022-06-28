import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-add-or-eddit-film',
  templateUrl: './add-or-eddit-film.component.html',
  styleUrls: ['./add-or-eddit-film.component.css'],
})
export class AddOrEdditFilmComponent {
  addOrEditFilmForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    note: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(5),
    ]),
  });

  constructor(private service: FilmService) {}

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  save() {
    this.onSave.emit({
      titre: this.addOrEditFilmForm.controls.titre.value,
      description: this.addOrEditFilmForm.controls.description.value,
      note: this.addOrEditFilmForm.controls.note.value,
    });
  }

  addFilm() {
    this.service.addFilm(this.addOrEditFilmForm.value).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },

      error: (err) => {
        alert('error');
      },
    });
  }
}
