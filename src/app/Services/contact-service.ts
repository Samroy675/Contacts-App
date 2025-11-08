import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../Models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = "http://localhost:5165/api/Contact";
  constructor(private httpClient: HttpClient) {

  }
  public getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.url);
  }

  public getContactById(id: string): Observable<Contact> {
    const temp: string = `${this.url}/${id}`;
    return this.httpClient.get<Contact>(temp);
  }

  public insertContact(contact : Contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact) as Observable<Contact>;
  }

  public updateContact(contact: Contact): Observable<any> {
    const temp = `${this.url}/${contact.contactId}`;
    return this.httpClient.put(temp, contact);
  }

  public deleteContact(id: number): Observable<any> {
    const temp = `${this.url}/${id}`;
    return this.httpClient.delete(temp);
  }


}
