import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveloansectionComponent } from './approveloansection.component';

describe('ApproveloansectionComponent', () => {
  let component: ApproveloansectionComponent;
  let fixture: ComponentFixture<ApproveloansectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveloansectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveloansectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
