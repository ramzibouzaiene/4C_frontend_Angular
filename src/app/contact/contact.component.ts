import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  contact: FormGroup;
  contacts: any;
  constructor(private contactService: ContactService ) { } 

  ngOnInit() {
    this.contact = new FormGroup({
      fullname: new FormControl(null),
      email: new FormControl(null),
      topic: new FormControl(null),
      message: new FormControl(null),

    })
  this.contactService.getContact().subscribe((data) => {
      console.log(data);
      this.contacts = data;
  },(error) => {
      console.log("error in the Service");
    })
}

  onSubmit() {
    console.log(this.contact);
  }

}

