import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { ServicesService } from '../services/services.service';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  currentUser: any;
  types : any[] =[];
  typeservice:any[] =[];
  storageUrl=environment.storageUrl;
  isLoggedIn = false; 
  constructor(private router: Router, 
    private menuService:MenuService,
    private token: TokenStorageService,
    private auth: AuthService,
    private servicesService:ServicesService
    ) { }


  ngOnInit() {
    if(sessionStorage.getItem('auth-user')){
      this.isLoggedIn = true
    }
    this.currentUser = this.token.getUser();

    this.menuService.getTypesActivites().subscribe((data : any[]) => {
      console.log(data);
      this.types = data

    }, (error) => {
      console.log(error);
    })

    this.servicesService.getTypesService().subscribe((data : any[]) => {
      console.log(data);
      this.typeservice = data

    }, (error) => {
      console.log(error);
    })
  }
  logout(){
    sessionStorage.clear()
    this.isLoggedIn = false
  }

  
}
