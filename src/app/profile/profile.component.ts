import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentToken: any;
  role_id = this.tokenStorage.getUser().role_id;
  storageUrl=environment.storageUrl;
  constructor(private token: TokenStorageService, private tokenStorage: TokenStorageService) {}

  ngOnInit(): void {
    this.currentToken = this.token.getToken();
    this.currentUser = this.token.getUser();
  }
}
