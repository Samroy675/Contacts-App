import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact-service';
import { Router } from '@angular/router';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-new-contact',
  standalone: false,
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.css'
})

export class NewContact {
  foundContact: Contact = {} as any; 

  constructor(
    private service: ContactService,
    private router: Router
  ) {}

  onSubmit() {
    this.service.insertContact(this.foundContact).subscribe((data) => {
      alert("The record is added successfully");
      this.router.navigate(['contacts/viewall']);
    });
  }
}





