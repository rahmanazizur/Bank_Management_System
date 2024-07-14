import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountdeleteComponent } from './accountdelete.component';

describe('AccountdeleteComponent', () => {
  let component: AccountdeleteComponent;
  let fixture: ComponentFixture<AccountdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
