import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanstatementComponent } from './loanstatement.component';

describe('LoanstatementComponent', () => {
  let component: LoanstatementComponent;
  let fixture: ComponentFixture<LoanstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
