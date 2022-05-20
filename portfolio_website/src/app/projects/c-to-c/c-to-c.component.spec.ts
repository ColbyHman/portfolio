import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToCComponent } from './c-to-c.component';

describe('CToCComponent', () => {
  let component: CToCComponent;
  let fixture: ComponentFixture<CToCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
