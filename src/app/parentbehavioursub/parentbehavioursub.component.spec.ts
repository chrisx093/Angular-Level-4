import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehavioursubComponent } from './parentbehavioursub.component';

describe('ParentbehavioursubComponent', () => {
  let component: ParentbehavioursubComponent;
  let fixture: ComponentFixture<ParentbehavioursubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehavioursubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbehavioursubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
