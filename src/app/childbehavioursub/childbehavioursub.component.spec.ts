import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbehavioursubComponent } from './childbehavioursub.component';

describe('ChildbehavioursubComponent', () => {
  let component: ChildbehavioursubComponent;
  let fixture: ComponentFixture<ChildbehavioursubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildbehavioursubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbehavioursubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
