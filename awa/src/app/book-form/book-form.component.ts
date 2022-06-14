import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent {
  bookTitleControl = new FormControl();
  bookDescriptionControl = new FormControl();

  submitBook() {
    console.log(this.bookTitleControl.value);
    console.log(this.bookDescriptionControl.value);
  }
}
