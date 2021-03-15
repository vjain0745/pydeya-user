import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryHomeComponent } from './grocery-home.component';

describe('GroceryHomeComponent', () => {
  let component: GroceryHomeComponent;
  let fixture: ComponentFixture<GroceryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
