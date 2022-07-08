import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualiteService } from '../services/actualite.service';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css'],
  providers: [ActualiteService]
})
export class BlogdetailComponent implements OnInit {
  storageUrl=environment.storageUrl;
  b:any;
  constructor(private route : ActivatedRoute,private actualiteService:ActualiteService) { }

  id = this.route.snapshot.params['id'];
  ngOnInit(): void {

    this.actualiteService.getActualite(this.id).subscribe((data) => {
      console.log(data);
      this.b = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
