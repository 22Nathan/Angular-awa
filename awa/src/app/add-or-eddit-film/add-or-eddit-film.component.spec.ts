import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEdditFilmComponent } from './add-or-eddit-film.component';

describe('AddOrEdditFilmComponent', () => {
  let component: AddOrEdditFilmComponent;
  let fixture: ComponentFixture<AddOrEdditFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrEdditFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrEdditFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
