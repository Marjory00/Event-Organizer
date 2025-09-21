import { Injectable } from '@angular/core';

// Interface for a vendor
interface Vendor {
  name: string;
  contact: string;
  service: string;
}

@Injectable({
  providedIn: 'root'
})
export class VendorContactService {
  // A simple mock of an API call
  private vendors: Vendor[] = [
    { name: 'Caterer Co.', contact: '555-1234', service: 'Catering' },
    { name: 'DJ Sound', contact: '555-5678', service: 'Music' }
  ];

  constructor() { }

  // Returns all vendors
  getVendors(): Vendor[] {
    return this.vendors;
  }

  // Adds a new vendor to the list
  addVendor(vendor: Vendor): void {
    this.vendors.push(vendor);
  }
}
