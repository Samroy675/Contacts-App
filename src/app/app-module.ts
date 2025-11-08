import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { EditContact } from './Components/edit-contact/edit-contact';
import { ContactView } from './Components/contact-view/contact-view';
import { NewContact } from './Components/new-contact/new-contact';
import { ContactList } from './Components/contact-list/contact-list';
import { Navbar } from './Components/navbar/navbar';
import { ErrorPage } from './Components/error-page/error-page';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutUs } from './Components/about-us/about-us';
import { ContactFilterPipe } from './Pipes/contact-filter-pipe';

@NgModule({
  declarations: [
    App,
    EditContact,
    ContactView,
    NewContact,
    ContactList,
    Navbar,
    ErrorPage,
    AboutUs,
    ContactFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
