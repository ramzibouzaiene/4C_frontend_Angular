import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from '../services/reclamation.service';


@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  errorMessage = '';

  reclamation =new FormGroup({
    sujet:new FormControl ('', [Validators.required]),
    contenu: new FormControl ('', [Validators.required])
  })

  constructor(private router: Router, private reclamationService:ReclamationService) {}
    

  onSubmit() {
    console.log("test")
    this.reclamationService.Reclamation(this.reclamation.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });
    
  }

  ngOnInit(){

  }

}
