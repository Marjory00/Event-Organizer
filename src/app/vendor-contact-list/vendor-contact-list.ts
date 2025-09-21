import { Component, OnInit } from '@angular/core';
import { VendorContactService } from '../vendor-contact';


@Component({
  selector: 'app-vendor-contact-list',
  standalone: false,
  templateUrl: './vendor-contact-list.html',
  styleUrl: './vendor-contact-list.css'
})
export class VendorContactList implements OnInit {

  vendors: any[] = [];
  newVendor = { name: '', contact: '', service: '' };

  constructor(private vendorService: VendorContactService) { }

   ngOnInit(): void {
    // Fetch vendors from the service on initialization
    this.vendors = this.vendorService.getVendors();
  }


// Adds a new vendor using the service
addVendor(): void {
  if (this.newVendor.name && this.newVendor.contact) {
    this.vendorService.addVendor(this.newVendor);
    this.newVendor = { name: '', contact: '', service: '' }; // Reset form
  }
}
}
