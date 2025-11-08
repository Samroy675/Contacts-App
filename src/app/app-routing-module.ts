import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactList } from './Components/contact-list/contact-list';
import { NewContact } from './Components/new-contact/new-contact';
import { ErrorPage } from './Components/error-page/error-page';
import { ContactView } from './Components/contact-view/contact-view';
import { EditContact } from './Components/edit-contact/edit-contact';
import { AboutUs } from './Components/about-us/about-us';

const routes: Routes = [
  {path:"", redirectTo:"contacts/viewall", pathMatch: "full"},
   {path:"contacts/viewall", component: ContactList},
   {path:"contacts/add", component: NewContact},
   {path:'contacts/view/:id', component: ContactView },
   {path:'contacts/edit/:id', component: EditContact },
   {path:'contacts/about-us', component: AboutUs},
   {path:"**", component: ErrorPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
