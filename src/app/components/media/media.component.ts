import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [MediaService]
})
export class MediaComponent implements OnInit {

  albums : any;
  storageUrl=environment.storageUrl;

  constructor(private mediaService: MediaService) { }

  ngOnInit(){
    this.mediaService.getMedia().subscribe((data) =>{
      console.log(data);
      this.albums = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
