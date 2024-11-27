import { TestBed } from '@angular/core/testing';

import { ProfilepicserviceService } from './profilepicservice.service';

describe('ProfilepicserviceService', () => {
  let service: ProfilepicserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilepicserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
