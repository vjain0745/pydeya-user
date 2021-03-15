import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderEcommerceComponent } from './my-order-ecommerce.component';

describe('MyOrderEcommerceComponent', () => {
  let component: MyOrderEcommerceComponent;
  let fixture: ComponentFixture<MyOrderEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
