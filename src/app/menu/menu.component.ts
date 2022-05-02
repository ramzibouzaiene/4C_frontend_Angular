import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  currentUser: any;
  types : any[] =[]
  isLoggedIn = true; 
  constructor(private router: Router, 
    private menuService:MenuService,
    private token: TokenStorageService,
    private auth: AuthService
    ) { }


  ngOnInit() {
    this.currentUser = this.token.getUser();

    this.menuService.getTypesActivites().subscribe((data : any[]) => {
      console.log(data);
      this.types = data

    }, (error) => {
      console.log(error);
    })
  }

  
}
