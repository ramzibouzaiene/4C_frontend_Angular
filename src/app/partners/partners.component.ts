import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../services/partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css'],
  providers: [PartnersService]
})
export class PartnersComponent implements OnInit {

  partners_indus: any;
  partners_univ: any;
  partners_asso: any;

  constructor(private partnersService: PartnersService) { }

  url = "http://localhost:8000/storage/"
  
  ngOnInit() {
    this.partnersService.getPartners().subscribe((data) => {
      console.log(data);
      this.partners_indus = data.partenaires_indus;
      this.partners_univ = data.partenaires_univ;
      this.partners_asso = data.partenaires_asso;

    }, (error) => {
      console.log("error in the Service");
    })
  }

}
