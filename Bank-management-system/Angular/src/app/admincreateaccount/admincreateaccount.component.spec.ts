import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateaccountComponent } from './admincreateaccount.component';

describe('AdmincreateaccountComponent', () => {
  let component: AdmincreateaccountComponent;
  let fixture: ComponentFixture<AdmincreateaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreateaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
