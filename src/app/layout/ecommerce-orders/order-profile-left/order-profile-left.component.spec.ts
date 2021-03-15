import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProfileLeftComponent } from './order-profile-left.component';

describe('OrderProfileLeftComponent', () => {
  let component: OrderProfileLeftComponent;
  let fixture: ComponentFixture<OrderProfileLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProfileLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProfileLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
