import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  constructor(private router: Router, private resumeService:ResumeService, private tokenStorage: TokenStorageService) {}

auth = this.tokenStorage.getUser()
//role = this.tokenStorage.getUser().role_id
errorMessage = '';

  resume = new FormGroup({
      profil: new FormControl ('', [Validators.required]),
      title: new FormControl ('', [Validators.required]),
  });

  experience= new FormGroup({
    titre: new FormControl ('', [Validators.required]),
      entreprise: new FormControl ('', [Validators.required]),
      localisation: new FormControl ('', [Validators.required]),
      datedebut: new FormControl ('', [Validators.required]),
      datefin: new FormControl ('', [Validators.required]),
      description: new FormControl ('', [Validators.required]),
      user_id:  new FormControl (this.auth.id )
  });

  education = new FormGroup({
    diplome: new FormControl ('', [Validators.required]),
      specialite: new FormControl ('', [Validators.required]),
      institut: new FormControl ('', [Validators.required]),
      dated: new FormControl ('', [Validators.required]),
      datef: new FormControl ('', [Validators.required]),
      user_id:  new FormControl (this.auth.id )
  });

  skills= new FormGroup({
    nom: new FormControl ('', [Validators.required]),
    user_id:  new FormControl (this.auth.id )
  })


  ngOnInit(){

  }

  onSubmit() {

    this.resumeService.Experience(this.experience.value).subscribe({
      next: (res) => {
        this.experience.reset();
        console.log(res);

      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });




  }

Submit() {
  this.resumeService.Education(this.education.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });

  }

  Submitt() {
    this.resumeService.Skills(this.resume.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });
  }

  Sub() {
    this.resumeService.Sammury(this.resume.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });

  }



/*
  get experienceBlocks(): FormArray {
    return this.resume.get('resume') as FormArray;
  }

  addExperience() {
    this.resume.push(
      new FormGroup({
      title: new FormControl (''),
      company: new FormControl (''),
      location: new FormControl (''),
      startDate: new FormControl (''),
      endDate: new FormControl (''),
      description: new FormControl ('')
      })
      );
  }*/

}
