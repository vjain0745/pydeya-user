import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryProductListComponent } from './grocery-product-list.component';

describe('GroceryProductListComponent', () => {
  let component: GroceryProductListComponent;
  let fixture: ComponentFixture<GroceryProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
