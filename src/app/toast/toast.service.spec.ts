/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';

describe('Service: Toast', () => {
  let service: ToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService]
    });
    service = TestBed.inject(ToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
