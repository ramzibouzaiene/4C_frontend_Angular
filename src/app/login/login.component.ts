import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { User } from '../core/models/user.modul';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user='1';

  constructor(
    private notifyService : NotificationService, 
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router: Router
    ) { }
   
  showToasterSuccess(){
      this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
  }
   
  showToasterError(){
      this.notifyService.showError("Something is wrong", "tutsmake.com")
  }
   
  showToasterInfo(){
      this.notifyService.showInfo("This is info", "tutsmake.com")
  }
   
  showToasterWarning(){
      this.notifyService.showWarning("This is warning", "tutsmake.com")
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      localStorage.setItem('SeesionUser',this.user)  
    }
  }
   
  get f(){
    return this.login.controls;
  }
   
  onSubmit(){
    console.log(this.login.value);
    const { email, password } = this.login.value;
    this.authService.login(email, password).subscribe({
      next: (data) => {
        console.log(data)
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);
        this.isLoggedIn = true;
        this.showToasterSuccess();
        this.isLoginFailed = false;
       // this.roles = this.tokenStorage.getUser().roles.roles_name;
        this.router.navigate(['/home']);
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
        this.isLoginFailed = true;
      },
    });
  }


}