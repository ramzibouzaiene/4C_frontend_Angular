import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibraryService } from '../services/library.service';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {

  libraries : any[] =[];

  storageUrl=environment.storageUrl;
  constructor(private libraryService:LibraryService, private router: Router) { }

  ngOnInit(){
    this.libraryService.getLibrary().subscribe((data : any[]) => {
      console.log(data);
      this.libraries = data
    }, (error) => {
      console.log(error);
    })
  }

  getlink(url){
    let tab=JSON.parse(url);
    return tab[0].download_link;
  }

}
