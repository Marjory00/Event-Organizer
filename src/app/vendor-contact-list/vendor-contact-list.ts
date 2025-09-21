import { Component, OnInit } from '@angular/core';
import { Data } from '../data'; // Corrected import
import { Observable } from 'rxjs';

// Interface for a vendor
interface Vendor {
  name: string;
  contact: string;
  service: string;
}

@Component({
  selector: 'app-vendor-contact-list',
  standalone: false,
  templateUrl: './vendor-contact-list.html', // Corrected path
  styleUrls: ['./vendor-contact-list.css'] // Corrected path
})
export class VendorContactList implements OnInit {
  // Use Observable to get data from the service
  vendors$!: Observable<Vendor[]>;

  // Object for the new vendor form input
  newVendor = {
    name: '',
    contact: '',
    service: ''
  };

  // Inject the DataService
  constructor(private data: Data ) { }

  ngOnInit(): void {
    // Subscribe to the vendors data stream from the service
    this.vendors$ = this.data.vendors$;
  }

  // Adds a new vendor using the DataService
  addVendor(): void {
    if (this.newVendor.name.trim() && this.newVendor.service.trim()) {
      this.data.addVendor(this.newVendor);
      // Reset the form fields
      this.newVendor = { name: '', contact: '', service: '' };
    }
  }
}
