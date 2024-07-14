import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayinstallmentComponent } from './payinstallment.component';

describe('PayinstallmentComponent', () => {
  let component: PayinstallmentComponent;
  let fixture: ComponentFixture<PayinstallmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayinstallmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayinstallmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
