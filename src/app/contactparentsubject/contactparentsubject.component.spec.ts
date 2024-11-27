import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactparentsubjectComponent } from './contactparentsubject.component';

describe('ContactparentsubjectComponent', () => {
  let component: ContactparentsubjectComponent;
  let fixture: ComponentFixture<ContactparentsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactparentsubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactparentsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
