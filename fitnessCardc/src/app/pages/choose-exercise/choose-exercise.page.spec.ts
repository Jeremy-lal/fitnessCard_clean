import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseExercisePage } from './choose-exercise.page';

describe('ChooseExercisePage', () => {
  let component: ChooseExercisePage;
  let fixture: ComponentFixture<ChooseExercisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseExercisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
