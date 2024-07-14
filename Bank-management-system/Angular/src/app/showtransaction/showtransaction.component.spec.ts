import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtransactionComponent } from './showtransaction.component';

describe('ShowtransactionComponent', () => {
  let component: ShowtransactionComponent;
  let fixture: ComponentFixture<ShowtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
