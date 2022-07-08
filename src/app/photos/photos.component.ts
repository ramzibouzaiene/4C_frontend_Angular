import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';
import { environment } from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
   p : any;
   photos:any;
  storageUrl=environment.storageUrl;

  constructor(private mediaService: MediaService,private route : ActivatedRoute) { }

  id = this.route.snapshot.params['id']

  ngOnInit() {
    this.mediaService.getPhotos(this.id).subscribe((data) =>{
      console.log(data);
      this.p = JSON.parse(data.photos);
    }, (error) => {
      console.log("error in the Service");
    })
  }
}
