import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCommunicationSupportComponent } from './order-communication-support.component';

describe('OrderCommunicationSupportComponent', () => {
  let component: OrderCommunicationSupportComponent;
  let fixture: ComponentFixture<OrderCommunicationSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCommunicationSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCommunicationSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
