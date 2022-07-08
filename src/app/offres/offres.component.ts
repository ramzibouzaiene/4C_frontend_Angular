import { Component, OnInit } from '@angular/core';
import { OffresService } from '../services/offres.service';
import { Offre } from '../Models/offres';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css'],
  providers: [OffresService]
})
export class OffresComponent implements OnInit {

  offres: any;
  storageUrl=environment.storageUrl;
  isReadMore = true;

  
  id = this.route.snapshot.params['id']

  constructor(private offresService:OffresService, private route : ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.offresService.getOffres(this.id).subscribe((data) =>{
      console.log(data);
      this.offres = data;
    }, (error) => {
      console.log("error in the Service");
    } )
  }

}
