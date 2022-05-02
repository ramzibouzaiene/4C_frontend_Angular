import { Component, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';
@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
  providers: [OffresService]
})
export class OffresComponent implements OnInit {

  offres: any;

  constructor(private offresService:OffresService) { }

  ngOnInit() {
    this.offresService.getOffres().subscribe((data) =>{
      console.log(data);
      this.offres = data;
    }, (error) => {
      console.log("error in the Service");
    } )
  }

}
