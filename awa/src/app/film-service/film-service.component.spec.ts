import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmServiceComponent } from './film-service.component';

describe('FilmServiceComponent', () => {
  let component: FilmServiceComponent;
  let fixture: ComponentFixture<FilmServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
