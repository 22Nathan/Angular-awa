import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-or-eddit-film',
  templateUrl: './add-or-eddit-film.component.html',
  styleUrls: ['./add-or-eddit-film.component.css'],
})
export class AddOrEdditFilmComponent {
  nfControl = new FormControl(); //titre
  dfControl = new FormControl(); //description

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  submitFilm() {
    const div = this.renderer.createElement('div');
    let card = this.renderer.createElement('div');
    card.classList.add('container');
    card.innerHTML =
      '' +
      '<div class="card">' +
      '<h5 class="card-header">' +
      this.nfControl.value +
      '</h5>' +
      '<div class="card-body">' +
      '<h5 class="card-title">Description</h5>' +
      '<p class="card-text">' +
      this.dfControl.value +
      '</p>' +
      '</div>' +
      '</div>';

    this.renderer.appendChild(div, card);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}
