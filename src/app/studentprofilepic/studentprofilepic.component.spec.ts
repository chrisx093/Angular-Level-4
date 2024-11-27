import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofilepicComponent } from './studentprofilepic.component';

describe('StudentprofilepicComponent', () => {
  let component: StudentprofilepicComponent;
  let fixture: ComponentFixture<StudentprofilepicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentprofilepicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprofilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
