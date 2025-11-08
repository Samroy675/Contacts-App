import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Models/contact';
import { ContactService } from '../../Services/contact-service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  standalone: false,
  templateUrl: './contact-view.html',
  styleUrl: './contact-view.css'
})
export class ContactView implements OnInit{
  id: any;
  foundContact: Contact = {} as Contact;

  constructor(
  private service: ContactService,
  private activatedRoute: ActivatedRoute
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
  

   
}
