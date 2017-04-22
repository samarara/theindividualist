import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleMenComponent } from './style-men.component';

describe('StyleMenComponent', () => {
  let component: StyleMenComponent;
  let fixture: ComponentFixture<StyleMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
