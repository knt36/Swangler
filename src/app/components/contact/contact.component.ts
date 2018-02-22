import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  text = {
    email: 'admin@slyce.it',
    apiVersion: '1.0.0'
  };

  constructor() { }

  ngOnInit() {
  }

}
