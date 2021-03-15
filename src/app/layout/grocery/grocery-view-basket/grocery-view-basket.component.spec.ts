import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryViewBasketComponent } from './grocery-view-basket.component';

describe('GroceryViewBasketComponent', () => {
  let component: GroceryViewBasketComponent;
  let fixture: ComponentFixture<GroceryViewBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryViewBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryViewBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
