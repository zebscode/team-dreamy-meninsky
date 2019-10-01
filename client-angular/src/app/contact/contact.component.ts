import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  contact: Contact[];
  dataService: ContactService;

  constructor(private contactService: ContactService) { 
     this.dataService = contactService;
  }
  ngOnInit() {
    this.contact = this.dataService.contact;

  }

}
