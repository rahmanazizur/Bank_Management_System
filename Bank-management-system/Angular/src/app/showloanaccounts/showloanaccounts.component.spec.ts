import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowloanaccountsComponent } from './showloanaccounts.component';

describe('ShowloanaccountsComponent', () => {
  let component: ShowloanaccountsComponent;
  let fixture: ComponentFixture<ShowloanaccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowloanaccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowloanaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
