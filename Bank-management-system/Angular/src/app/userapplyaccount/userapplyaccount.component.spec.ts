import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserapplyaccountComponent } from './userapplyaccount.component';

describe('UserapplyaccountComponent', () => {
  let component: UserapplyaccountComponent;
  let fixture: ComponentFixture<UserapplyaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserapplyaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserapplyaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
