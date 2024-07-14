import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcustomerbalanceComponent } from './showcustomerbalance.component';

describe('ShowcustomerbalanceComponent', () => {
  let component: ShowcustomerbalanceComponent;
  let fixture: ComponentFixture<ShowcustomerbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowcustomerbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcustomerbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
