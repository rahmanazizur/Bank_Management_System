import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountupdateComponent } from './adminaccountupdate.component';

describe('AdminaccountupdateComponent', () => {
  let component: AdminaccountupdateComponent;
  let fixture: ComponentFixture<AdminaccountupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaccountupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaccountupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
