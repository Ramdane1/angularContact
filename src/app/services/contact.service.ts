//import { Contact } from 'src/app/models/contact';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactDoc: AngularFirestoreDocument<Contact>;


  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  constructor(private afs: AngularFirestore) { 

   this.contactsCollection = this.afs.collection('contacts');
   //this.contacts = this.contactsCollection.valueChanges(); il ne recupére pas l'id


  this.contacts = this.contactsCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Contact;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );

  }

  getContacts(){
    return this.contacts;
  }

  createContact(contact: Contact){
    this.contactsCollection.add(contact);
  }

  updateContact(contact: Contact){
  this.contactDoc =  this.contactsCollection.doc<Contact>(contact.id);
  this.contactDoc.update(contact);
  }
}


