import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-or-eddit-film',
  templateUrl: './add-or-eddit-film.component.html',
  styleUrls: ['./add-or-eddit-film.component.css'],
})
export class AddOrEdditFilmComponent {
  addOrEditFilmForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', []),
    note: new FormControl<number | null>(null, [
      Validators.min(0),
      Validators.max(5),
    ]),
  });

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  save() {
    this.onSave.emit({
      title: this.addOrEditFilmForm.controls.filmTitle.value,
      description: this.addOrEditFilmForm.controls.filmSys.value,
      note: this.addOrEditFilmForm.controls.filmNote.value,
    });
  }
}
