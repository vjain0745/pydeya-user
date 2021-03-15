import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercePaymentLoginComponent } from './ecommerce-payment-login.component';

describe('EcommercePaymentLoginComponent', () => {
  let component: EcommercePaymentLoginComponent;
  let fixture: ComponentFixture<EcommercePaymentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercePaymentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercePaymentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
