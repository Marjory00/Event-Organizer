import { Injectable } from '@angular/core';
import { Vendor } from '../../models/vendor/vendor.model'; // Import the Vendor model.

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  // In-memory array to store vendor data.
  private vendors: Vendor[] = [
    { id: 1, name: 'Delicious Catering', service: 'Catering', contactPerson: 'Mary Jones', phoneNumber: '555-1234', email: 'mary@catering.com' },
    { id: 2, name: 'Spin Masters', service: 'DJ', contactPerson: 'Mike Johnson', phoneNumber: '555-5678', email: 'mike@spinmasters.com' }
  ];
  private nextId = 3;

  /**
   * @description Retrieves all vendors from the service.
   * @returns An array of Vendor objects.
   */
  getVendors(): Vendor[] {
    return this.vendors;
  }

  /**
   * @description Adds a new vendor to the list.
   * @param vendor The vendor object to be added (without the 'id').
   */
  addVendor(vendor: Omit<Vendor, 'id'>): void {
    const newVendor: Vendor = {
      ...vendor,
      id: this.nextId++
    };
    this.vendors.push(newVendor);
  }

  /**
   * @description Updates an existing vendor in the list.
   * @param updatedVendor The vendor object with updated information.
   */
  updateVendor(updatedVendor: Vendor): void {
    const index = this.vendors.findIndex(v => v.id === updatedVendor.id);
    if (index !== -1) {
      this.vendors[index] = updatedVendor;
    }
  }

  /**
   * @description Deletes a vendor by their ID.
   * @param id The ID of the vendor to be deleted.
   */
  deleteVendor(id: number): void {
    this.vendors = this.vendors.filter(v => v.id !== id);
  }
}
