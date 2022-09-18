import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ForgetpassService } from '../../services/forgetpass.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  closeModal: string;

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  });

  forgetpass= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  });

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user='1';
  alert:any;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private modalService: NgbModal,
    private forgetpassService:ForgetpassService
    ) {}

   triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      localStorage.setItem('SeesionUser',this.user)
      this.router.navigate(['/home']);
    }
  }

  get f(){
    return this.login.controls;
  }

  onSubmit(){

    const { email, password } = this.login.value;
    this.authService.login(email, password).subscribe({
      next: (data) => {

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.alert=true;
       // this.roles = this.tokenStorage.getUser().roles.roles_name;
       location.reload()
       // this.router.navigate(['/home']);
      },
      error: (e) => {

        this.errorMessage = e.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  Submit(){
    this.forgetpassService.forget(this.forgetpass.value.email).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/reset-password']);
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });
  }
  closeAlert() {
    this.alert=false;
  }

}
