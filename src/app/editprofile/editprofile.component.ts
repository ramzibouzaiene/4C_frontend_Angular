import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ProfileService } from '../services/profile.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { User } from '../core/models/user.modul';



@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  providers: [ProfileService]
})
export class EditprofileComponent implements OnInit {
  role_id = this.tokenStorage.getUser().role_id;
  profiles = new FormGroup({
    avatar: new FormControl(''),
    name: new FormControl(''),
    lastname: new FormControl(''),
    date_nes: new FormControl(''),
    tel: new FormControl(''),
    adresse: new FormControl(''),
    facebook: new FormControl(''),
    linkedin: new FormControl(''),
    instagram: new FormControl(''),
    github: new FormControl(''),
    grade: new FormControl(''),
    specialite: new FormControl(''),
    statut: new FormControl(''),
    groupe:new FormControl(''),
    filiere: new FormControl(''),
     password:new FormControl(''),
    newpassword: new FormControl(''),
    confpassword: new FormControl('')
  });

  currentUser: any;
  errorMessage = '';
  id: number;
  alert:any;
  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService, 
    private router: Router,
    private profileService: ProfileService,
    private route: ActivatedRoute

    ) {}

  ngOnInit(){
    //console.log(this.route.snapshot.params['id'])
   
  }

  UpdateData(){
    console.log("test")
    this.profileService.Update(this.route.snapshot.params['id'],this.profiles.value).subscribe((res) => {
        console.log(res, "Profile Successfully Upadated")
        //this.router.navigate(['/profile']);
        this.alert=true;
      },

    );

    this.profileService.ChangePass(this.profiles.value).subscribe((res) => {
      console.log(res)
        console.log(res, "Password Successfully Upadated")
        //this.router.navigate(['/profile']);
        this.alert=true;
      },

    );

  }

  closeAlert() {
    this.alert=false;
  }

}
