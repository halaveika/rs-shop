import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketBtnComponent } from './basket-btn.component';

describe('BasketBtnComponent', () => {
  let component: BasketBtnComponent;
  let fixture: ComponentFixture<BasketBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
