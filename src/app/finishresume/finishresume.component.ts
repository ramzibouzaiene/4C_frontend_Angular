import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import {MatIconModule} from '@angular/material/icon'



@Component({
  selector: 'app-finishresume',
  templateUrl: './finishresume.component.html',
  styleUrls: ['./finishresume.component.css']
})
export class FinishresumeComponent implements OnInit 
{
  storageUrl=environment.storageUrl;
  exps: any;
  educs: any;
  sums: any;
  skills: any;
  currentUser: any;
  currentToken: any;

  constructor(private resumeService:ResumeService,private token: TokenStorageService) { 
    this.currentToken = this.token.getToken();
    this.currentUser = this.token.getUser();
  }

  ngOnInit(){
    this.resumeService.getExperience().subscribe((data) =>{
      console.log(data);
      this.exps = data;
    }, (error) => {
      console.log("error in the Service");
    })

    this.resumeService.getEducation().subscribe((data) =>{
      console.log(data);
      this.educs = data;
    }, (error) => {
      console.log("error in the Service");
    })

    this.resumeService.getSammury().subscribe((data) =>{
      console.log(data);
      this.sums = data;
    }, (error) => {
      console.log("error in the Service");
    })

    this.resumeService.getSkills().subscribe((data) =>{
      console.log(data);
      this.skills = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'abc.net/files/test.ino');
    link.setAttribute('download', `cv.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

}
