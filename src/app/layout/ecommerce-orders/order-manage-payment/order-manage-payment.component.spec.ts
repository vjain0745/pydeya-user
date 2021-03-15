import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderManagePaymentComponent } from './order-manage-payment.component';

describe('OrderManagePaymentComponent', () => {
  let component: OrderManagePaymentComponent;
  let fixture: ComponentFixture<OrderManagePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderManagePaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderManagePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
