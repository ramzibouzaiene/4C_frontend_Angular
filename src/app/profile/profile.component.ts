import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentToken: any;
  constructor(private token: TokenStorageService) {}

  ngOnInit(): void {
    this.currentToken = this.token.getToken();
    this.currentUser = this.token.getUser();
  }
}