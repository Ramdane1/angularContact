import { NavbarComponent } from './../components/navbar/navbar.component';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  constructor(private afs: AngularFirestore) { 

   this.contactsCollection = this.afs.collection('contacts');
   this.contacts = this.contactsCollection.valueChanges();
  }

  getContacts(){
    return this.contacts;
  }
}


