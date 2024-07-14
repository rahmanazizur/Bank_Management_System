import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectaccountComponent } from './rejectaccount.component';

describe('RejectaccountComponent', () => {
  let component: RejectaccountComponent;
  let fixture: ComponentFixture<RejectaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
