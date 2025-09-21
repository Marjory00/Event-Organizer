import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContactList } from './vendor-contact-list';

describe('VendorContactList', () => {
  let component: VendorContactList;
  let fixture: ComponentFixture<VendorContactList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendorContactList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorContactList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
