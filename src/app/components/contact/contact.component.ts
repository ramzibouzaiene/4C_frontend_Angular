import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {

  errorMessage = '';

  contact = new FormGroup({
      nom: new FormControl ('', [Validators.required]),
      prenom: new FormControl ('', [Validators.required]),
      email: new FormControl ('', [Validators.required]),
      sujet: new FormControl ('', [Validators.required]),
      message: new FormControl ('', [Validators.required])

    });

  contacts: any;
  constructor(private contactService: ContactService ) { }

  onSubmit() {

  console.log("test")
    this.contactService.Contact(this.contact.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });
}

  ngOnInit() {


  }

}

