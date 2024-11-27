import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformtitleComponent } from './reactiveformtitle.component';

describe('ReactiveformtitleComponent', () => {
  let component: ReactiveformtitleComponent;
  let fixture: ComponentFixture<ReactiveformtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveformtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
