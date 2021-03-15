import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyFavComponent } from './pharmacy-fav.component';

describe('PharmacyFavComponent', () => {
  let component: PharmacyFavComponent;
  let fixture: ComponentFixture<PharmacyFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
