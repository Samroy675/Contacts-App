import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../Services/contact-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Contact } from '../../Models/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.html',
  standalone: false
})
export class EditContact implements OnInit {
 id: any;
foundContact: Contact = {} as Contact;

constructor(
  private service: ContactService,
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get("id");
    if (this.id) {
      this.service.getContactById(this.id).subscribe((data) => {
        this.foundContact = data as Contact;
      });
    }
  });
}

onUpdate() {
  this.service.updateContact(this.foundContact).subscribe((data) => {
    this.router.navigate(['contacts/viewall']);
  });
}

}