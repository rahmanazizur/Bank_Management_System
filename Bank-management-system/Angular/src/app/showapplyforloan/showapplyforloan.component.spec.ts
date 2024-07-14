import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowapplyforloanComponent } from './showapplyforloan.component';

describe('ShowapplyforloanComponent', () => {
  let component: ShowapplyforloanComponent;
  let fixture: ComponentFixture<ShowapplyforloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowapplyforloanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowapplyforloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
