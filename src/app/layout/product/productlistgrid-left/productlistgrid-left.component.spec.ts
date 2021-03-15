import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistgridLeftComponent } from './productlistgrid-left.component';

describe('ProductlistgridLeftComponent', () => {
  let component: ProductlistgridLeftComponent;
  let fixture: ComponentFixture<ProductlistgridLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlistgridLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlistgridLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
