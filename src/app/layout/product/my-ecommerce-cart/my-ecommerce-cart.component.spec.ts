import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEcommerceCartComponent } from './my-ecommerce-cart.component';

describe('MyEcommerceCartComponent', () => {
  let component: MyEcommerceCartComponent;
  let fixture: ComponentFixture<MyEcommerceCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEcommerceCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEcommerceCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
