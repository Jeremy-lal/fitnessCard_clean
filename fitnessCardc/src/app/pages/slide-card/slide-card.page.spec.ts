import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCardPage } from './slide-card.page';

describe('SlideCardPage', () => {
  let component: SlideCardPage;
  let fixture: ComponentFixture<SlideCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
