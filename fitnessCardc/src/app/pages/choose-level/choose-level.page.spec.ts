import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLevelPage } from './choose-level.page';

describe('ChooseLevelPage', () => {
  let component: ChooseLevelPage;
  let fixture: ComponentFixture<ChooseLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
