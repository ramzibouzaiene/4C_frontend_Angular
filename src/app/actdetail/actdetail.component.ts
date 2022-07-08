import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { environment } from '../../environments/environment';
import { TokenStorageService } from '../services/token-storage.service';
import { CommentactiviteService } from '../services/commentactivite.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-actdetail',
  templateUrl: './actdetail.component.html',
  styleUrls: ['./actdetail.component.css'],
  providers: [EventsService, AuthService]
})
export class ActdetailComponent implements OnInit {
  
  auth = this.tokenStorage.getUser();
  currentUser: any;
  a: any;
  allcom: any;
  storageUrl=environment.storageUrl;
  isLoggedIn = false;
  errorMessage = '';

  constructor(private eventsService: EventsService , 
    private route : ActivatedRoute,
    private token: TokenStorageService,
    private commentactiviteService:CommentactiviteService,
    private authService:AuthService,
    private tokenStorage: TokenStorageService
    ) { }

  id = this.route.snapshot.params['id'];

 comments = new FormGroup({
  comment: new FormControl(''),
  user_id:  new FormControl (this.auth.id ),
  activite_id: new FormControl(this.id)
  });

  ngOnInit() {
    if(sessionStorage.getItem('auth-user')){
      this.isLoggedIn = true
    }
    this.currentUser = this.token.getUser();
    console.log(this.id)
    this.eventsService.getActivity(this.id).subscribe((data) => {
      console.log(data);
      this.a = data;
    }, (error) => {
      console.log("error in the Service");
    })

    this.commentactiviteService.getComments().subscribe((data) => {
      console.log(data);
      this.allcom = data;
    })
  }

  onSubmit(){
    this.commentactiviteService.Comments(this.comments.value).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (e) => {
        console.log(e)
        this.errorMessage = e.error.message;
      },
    });
  }

}
