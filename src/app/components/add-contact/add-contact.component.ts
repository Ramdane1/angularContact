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
    telephone: 0
  };

  statutContact: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
