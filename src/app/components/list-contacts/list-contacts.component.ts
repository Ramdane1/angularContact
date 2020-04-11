import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {

  statutContact = false;
  myContact: Contact;
  contacts;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts =>{
      this.contacts = contacts;
      console.log(this.contacts);
    })
  }

  updateContact(contact){
    this.contactService.updateContact(contact);
    this.statutContact = false;
  }

  editContact(contact){
    this.statutContact = true;
    this.myContact = contact;
  }

  deleteContact(contact){
    if(confirm('Are you sur to delete this contact?')){
      this.contactService.destroyContact(contact);
    }else{
      this.statutContact = false;
    }
    
  }
}
