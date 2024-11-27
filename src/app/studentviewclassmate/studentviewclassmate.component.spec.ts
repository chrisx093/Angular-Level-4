import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentviewclassmateComponent } from './studentviewclassmate.component';

describe('StudentviewclassmateComponent', () => {
  let component: StudentviewclassmateComponent;
  let fixture: ComponentFixture<StudentviewclassmateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentviewclassmateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentviewclassmateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
