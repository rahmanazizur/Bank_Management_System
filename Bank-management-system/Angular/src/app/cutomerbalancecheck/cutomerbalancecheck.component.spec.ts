import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomerbalancecheckComponent } from './cutomerbalancecheck.component';

describe('CutomerbalancecheckComponent', () => {
  let component: CutomerbalancecheckComponent;
  let fixture: ComponentFixture<CutomerbalancecheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomerbalancecheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomerbalancecheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
