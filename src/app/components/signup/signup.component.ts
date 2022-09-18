import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {

  isSuccessfully = false;
  isRegisterFailed = false;
  errorMessage = '';
  roles: string[] = [];
  isLoggedIn = false;
  alert:any;

  signup = new FormGroup({
    role_id: new FormControl ('', [Validators.required]),
    cin: new FormControl ('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('')
  });



  constructor(

    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  showToasterSuccess(){
     // this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }

  showToasterError(){
      //this.notifyService.showError("Something is wrong", "tutsmake.com")
  }

  showToasterInfo(){
     // this.notifyService.showInfo("This is info", "tutsmake.com")
  }

  showToasterWarning(){
    //  this.notifyService.showWarning("This is warning", "tutsmake.com")
  }

  ngOnInit() {
    /*
    if (this.signup) {
    console.log('form submitted');
  } else {
    console.log(Error);
  }
  if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles.roles_name;
    } */

  }

  get f(){
    return this.signup.controls;
  }

  onSubmit(){
    console.log("test",this.signup.value)
    this.authService.register(this.signup.value).subscribe({
      next: (res) => {
        console.log(res)
        this.tokenStorage.saveToken(res.token);
        this.tokenStorage.saveUser(res.user);
        this.isSuccessfully = true;
        this.alert=true;
        this.isRegisterFailed = false;
        this.router.navigate(['/login']);
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
        this.isRegisterFailed = true;
      },
    });
  }

  closeAlert() {
    this.alert=false;
  }
}
