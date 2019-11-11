import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicationPage } from './explication.page';

describe('ExplicationPage', () => {
  let component: ExplicationPage;
  let fixture: ComponentFixture<ExplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
