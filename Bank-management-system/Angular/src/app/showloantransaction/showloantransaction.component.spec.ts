import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowloantransactionComponent } from './showloantransaction.component';

describe('ShowloantransactionComponent', () => {
  let component: ShowloantransactionComponent;
  let fixture: ComponentFixture<ShowloantransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowloantransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowloantransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
