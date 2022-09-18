import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { environment } from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  blogs:any;
  storageUrl=environment.storageUrl;
  constructor(private actualiteService:ActualiteService,private route : ActivatedRoute) { }

  id = this.route.snapshot.params['id'];

  ngOnInit(){
    this.actualiteService.getActualites(this.id).subscribe((data) => {
      console.log(data);
      this.blogs = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
