import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchstatementComponent } from './searchstatement.component';

describe('SearchstatementComponent', () => {
  let component: SearchstatementComponent;
  let fixture: ComponentFixture<SearchstatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchstatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchstatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
