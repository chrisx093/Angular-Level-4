import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactchildbehavioursubjectComponent } from './contactchildbehavioursubject.component';

describe('ContactchildbehavioursubjectComponent', () => {
  let component: ContactchildbehavioursubjectComponent;
  let fixture: ComponentFixture<ContactchildbehavioursubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactchildbehavioursubjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactchildbehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
