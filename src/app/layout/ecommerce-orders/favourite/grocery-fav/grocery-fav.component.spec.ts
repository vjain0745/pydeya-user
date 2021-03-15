import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryFavComponent } from './grocery-fav.component';

describe('GroceryFavComponent', () => {
  let component: GroceryFavComponent;
  let fixture: ComponentFixture<GroceryFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
