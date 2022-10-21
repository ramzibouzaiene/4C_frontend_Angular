import { Component, OnInit } from '@angular/core';
import { ForgetpassService } from '../../services/forgetpass.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  submitted = false;
  token: any;
  email;
  error={
    email:null
  };
  message:any;

  resetpass= new FormGroup({
    newpass : new FormControl('', [Validators.required]),
    confpass : new FormControl('', [Validators.required])
  });

  constructor(private forgetpassService:ForgetpassService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    //const email = this.resetpass.value.email;
    this.forgetpassService.forget(this.email).subscribe((res:any) =>{
      this.message = res.message;
      this.router.navigate(['/login']);
    }, (err)=>{
      this.error = err.error.errors;
    });
  }
}
