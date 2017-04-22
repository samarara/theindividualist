import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleWomenComponent } from './style-women.component';

describe('StyleWomenComponent', () => {
  let component: StyleWomenComponent;
  let fixture: ComponentFixture<StyleWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
