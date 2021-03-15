import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryNavComponent } from './grocery-nav.component';

describe('GroceryNavComponent', () => {
  let component: GroceryNavComponent;
  let fixture: ComponentFixture<GroceryNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
