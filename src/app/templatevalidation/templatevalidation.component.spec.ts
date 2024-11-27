import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevalidationComponent } from './templatevalidation.component';

describe('TemplatevalidationComponent', () => {
  let component: TemplatevalidationComponent;
  let fixture: ComponentFixture<TemplatevalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatevalidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatevalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
