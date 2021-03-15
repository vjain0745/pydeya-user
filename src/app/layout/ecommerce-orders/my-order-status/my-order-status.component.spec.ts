import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderStatusComponent } from './my-order-status.component';

describe('MyOrderStatusComponent', () => {
  let component: MyOrderStatusComponent;
  let fixture: ComponentFixture<MyOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
