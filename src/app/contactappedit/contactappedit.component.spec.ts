import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactappeditComponent } from './contactappedit.component';

describe('ContactappeditComponent', () => {
  let component: ContactappeditComponent;
  let fixture: ComponentFixture<ContactappeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactappeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactappeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
