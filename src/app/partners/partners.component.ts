import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../services/partners.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  providers: [PartnersService]
})
export class PartnersComponent implements OnInit {

  partners : any[] =[];
  p: any;
  storageUrl=environment.storageUrl;

  constructor(private partnersService: PartnersService,private router: Router) { }
  
  ngOnInit() {
    this.partnersService.getPartners().subscribe((data) => {
      console.log(data);
      this.partners = data
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
