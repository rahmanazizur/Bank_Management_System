import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbalancecheckComponent } from './customerbalancecheck.component';

describe('CustomerbalancecheckComponent', () => {
  let component: CustomerbalancecheckComponent;
  let fixture: ComponentFixture<CustomerbalancecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerbalancecheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerbalancecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
