import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  providers: [MediaService]
})
export class MediaComponent implements OnInit {

  media : any;
  constructor(private mediaService: MediaService) { }

  ngOnInit(){
    this.mediaService.getMedia().subscribe((data) =>{
      console.log(data);
      this.media = data;
    }, (error) => {
      console.log("error in the Service");
    })
  }

}
