import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaddcourseComponent } from './studentaddcourse.component';

describe('StudentaddcourseComponent', () => {
  let component: StudentaddcourseComponent;
  let fixture: ComponentFixture<StudentaddcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentaddcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentaddcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
