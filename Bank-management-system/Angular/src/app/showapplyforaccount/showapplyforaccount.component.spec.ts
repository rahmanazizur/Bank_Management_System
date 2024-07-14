import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowapplyforaccountComponent } from './showapplyforaccount.component';

describe('ShowapplyforaccountComponent', () => {
  let component: ShowapplyforaccountComponent;
  let fixture: ComponentFixture<ShowapplyforaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowapplyforaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowapplyforaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
