import { Component, OnInit, Input } from '@angular/core';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contactData: ContactModel;

  constructor() { }

  ngOnInit() {
  }

}
