import { TestBed } from '@angular/core/testing';

import { VendorContact } from './vendor-contact';

describe('VendorContact', () => {
  let service: VendorContact;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendorContact);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
