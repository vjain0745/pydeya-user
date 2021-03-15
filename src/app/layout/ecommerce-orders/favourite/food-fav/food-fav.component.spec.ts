import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFavComponent } from './food-fav.component';

describe('FoodFavComponent', () => {
  let component: FoodFavComponent;
  let fixture: ComponentFixture<FoodFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
