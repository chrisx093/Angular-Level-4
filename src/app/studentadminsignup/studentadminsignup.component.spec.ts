import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadminsignupComponent } from './studentadminsignup.component';

describe('StudentadminsignupComponent', () => {
  let component: StudentadminsignupComponent;
  let fixture: ComponentFixture<StudentadminsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentadminsignupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentadminsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
