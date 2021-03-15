import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceOrderSuccessfullComponent } from './ecommerce-order-successfull.component';

describe('EcommerceOrderSuccessfullComponent', () => {
  let component: EcommerceOrderSuccessfullComponent;
  let fixture: ComponentFixture<EcommerceOrderSuccessfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceOrderSuccessfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceOrderSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
