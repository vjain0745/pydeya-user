import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPharmacyComponent } from './order-pharmacy.component';

describe('OrderPharmacyComponent', () => {
  let component: OrderPharmacyComponent;
  let fixture: ComponentFixture<OrderPharmacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPharmacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
