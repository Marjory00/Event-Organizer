import { Component, OnInit } from '@angular/core';
import { VendorService } from '../services/vendor/vendor.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Vendor } from '../models/vendor/vendor.model';

// The Vendor interface is imported from the model, so no need to redeclare it here.

@Component({
  selector: 'app-vendor-contact-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor-contact-list.html',
  styleUrl: './vendor-contact-list.css',
  providers: [VendorService]
})
export class VendorContactList implements OnInit {

  // Array to store vendor data
  vendors: any[] = [];

  // Object for the new vendor form input
  newVendor: Omit<Vendor, 'id' > = { name: '', service: '', contactPerson: '', phoneNumber: '', email: '' };

  constructor(private vendorService: VendorService) { }

    ngOnInit(): void {
      this.vendors = this.vendorService.getVendors();
  }

  // Adds a new vendor to the list
  addVendor(): void {
    // Check if both name and service are not empty
    if (this.newVendor.name && this.newVendor.service) {
      // Use the spread operator to add a new vendor object to the array
      this.vendorService.addVendor(this.newVendor);
      this.vendors = this.vendorService.getVendors();
      this.newVendor = { name: '', service: '', contactPerson: '', phoneNumber: '', email: '' };
    }
  }
}
