import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentadmindashboardComponent } from './studentadmindashboard.component';

describe('StudentadmindashboardComponent', () => {
  let component: StudentadmindashboardComponent;
  let fixture: ComponentFixture<StudentadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentadmindashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
