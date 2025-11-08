import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Models/contact';
import { ContactService } from '../../Services/contact-service';

@Component({
  selector: 'app-contact-list',
  standalone: false,
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {
  contactList: Contact[] = [];
  searchCriteria : string = ""
  constructor(private service: ContactService) {

  }

  ngOnInit(): void {
    let observable = this.service.getAllContacts();
    observable.subscribe((data: Contact[]) => {
      this.contactList = data;
    })
  }

  deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.service.deleteContact(id).subscribe({
        next: () => {
          // Refresh the contact list after deletion
          this.contactList = this.contactList.filter(c => c.contactId !== id);
        }
      });
    }
  }
}
