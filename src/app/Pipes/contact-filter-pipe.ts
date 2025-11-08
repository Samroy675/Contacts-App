import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../Models/contact';

@Pipe({
  name: 'contactFilter',
  standalone: false
})
export class ContactFilterPipe implements PipeTransform {

  transform(contacts: Contact[], args: string): Contact[] {
    if(args == "") return contacts
    return contacts.filter(c => c.contactName.toLowerCase().includes(args.toLowerCase()));
  }

}
