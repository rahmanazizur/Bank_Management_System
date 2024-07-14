import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountdeleteComponent } from './adminaccountdelete.component';

describe('AdminaccountdeleteComponent', () => {
  let component: AdminaccountdeleteComponent;
  let fixture: ComponentFixture<AdminaccountdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaccountdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaccountdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
