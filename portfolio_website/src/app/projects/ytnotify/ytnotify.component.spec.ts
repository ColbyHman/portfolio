import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YtnotifyComponent } from './ytnotify.component';

describe('YtnotifyComponent', () => {
  let component: YtnotifyComponent;
  let fixture: ComponentFixture<YtnotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YtnotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YtnotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
