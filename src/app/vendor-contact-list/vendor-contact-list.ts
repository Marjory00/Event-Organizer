import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data';

interface Vendor {
  id: number;
  name: string;
  contact: string;
  service: string;
}

@Component({
  selector: 'app-vendor-contact-list',
  standalone: false,
  templateUrl: './vendor-contact-list.html',
  styleUrls: ['./vendor-contact-list.css']
})
export class VendorContactList implements OnInit {
  vendors$!: Observable<Vendor[]>;
  newVendor: Omit<Vendor, 'id'> = { name: '', contact: '', service: '' };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.vendors$ = this.dataService.vendors$;
  }

  addVendor(): void {
    if (this.newVendor.name.trim() && this.newVendor.contact.trim()) {
      this.dataService.addVendor(this.newVendor);
      this.newVendor = { name: '', contact: '', service: '' };
    }
  }

  removeVendor(id: number): void {
    this.dataService.removeVendor(id);
  }
}
