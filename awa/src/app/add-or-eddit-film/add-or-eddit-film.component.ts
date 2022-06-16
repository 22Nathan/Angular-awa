import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-or-eddit-film',
  templateUrl: './add-or-eddit-film.component.html',
  styleUrls: ['./add-or-eddit-film.component.css'],
})
export class AddOrEdditFilmComponent {
  nfControl = new FormControl(); //titre
  dfControl = new FormControl(); //description

  submitFilm() {
    console.log(this.nfControl.value);
    console.log(this.dfControl.value);
  }
}
