import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  contact: Contact = {
    name:'',
    telephone:null
  };


  

  statutContact: boolean = false;
  constructor(private ContactService: ContactService) { }

  ngOnInit() {
  }

  reset(){
   this.contact.name = "";
   this.contact.telephone = null;
   this.statutContact = false;
  }

  newContact(){
    this.ContactService.createContact(this.contact);
    this.reset();
  }



}
