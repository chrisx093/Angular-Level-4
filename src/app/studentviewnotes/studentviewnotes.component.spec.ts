import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewnotesComponent } from './studentviewnotes.component';

describe('StudentviewnotesComponent', () => {
  let component: StudentviewnotesComponent;
  let fixture: ComponentFixture<StudentviewnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentviewnotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentviewnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
