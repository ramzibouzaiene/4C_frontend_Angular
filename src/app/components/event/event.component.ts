import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import {ActivatedRoute} from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventsService]
})
export class EventComponent implements OnInit {
  activites: any;
  isReadMore = true;
  storageUrl=environment.storageUrl;

  constructor(private eventsService: EventsService , private route : ActivatedRoute ) { }

  id = this.route.snapshot.params['id']

  ngOnInit() {
    console.log(this.id)
    this.eventsService.getActivites(this.id).subscribe((data) => {
      console.log(data);
      this.activites = data;
    }, (error) => {
      console.log("error in the Service");
    })

  }

}
