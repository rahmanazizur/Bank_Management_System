import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuserbalanceComponent } from './showuserbalance.component';

describe('ShowuserbalanceComponent', () => {
  let component: ShowuserbalanceComponent;
  let fixture: ComponentFixture<ShowuserbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowuserbalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowuserbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
