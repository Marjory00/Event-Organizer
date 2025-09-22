import { Component, OnInit } from '@angular/core';
import { VendorContactService } from '../vendor-contact';


// Interface for a vendor
interface Vendor {
  name: string;
  contact: string;
  service: string;
}

@Component({
  selector: 'app-vendor-contact-list',
  standalone: false,
  templateUrl: './vendor-contact-list.html',
  styleUrl: './vendor-contact-list.css'
})
export class VendorContactList implements OnInit {

  // Array to store vendor data
  vendors: any[] = [];

  // Object for the new vendor form input
  newVendor = {
    name: '',
    contact: '',
    service: '' };

  constructor(private vendorService: VendorContactService) { }

    ngOnInit(): void {
    // Initial data for demonstration
    this.vendors.push({ name: 'Caterer Co.', contact: '555-1234', service: 'Catering' });
    this.vendors.push({ name: 'DJ Sound', contact: '555-5678', service: 'Music' });
  }

  // Adds a new vendor to the list
  addVendor(): void {
    // Check if both name and service are not empty
    if (this.newVendor.name.trim() && this.newVendor.service.trim()) {
      // Use the spread operator to add a new vendor object to the array
      this.vendors.push({ ...this.newVendor });

      // Reset the form fields
      this.newVendor = { name: '', contact: '', service: '' };
    }
  }
}
