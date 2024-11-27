import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadminsigninComponent } from './studentadminsignin.component';

describe('StudentadminsigninComponent', () => {
  let component: StudentadminsigninComponent;
  let fixture: ComponentFixture<StudentadminsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentadminsigninComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentadminsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
