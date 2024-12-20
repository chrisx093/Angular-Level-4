import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAppComponent } from './contact-app.component';
import { RouterLink } from '@angular/router';

describe('ContactAppComponent', () => {
  let component: ContactAppComponent;
  let fixture: ComponentFixture<ContactAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAppComponent,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
