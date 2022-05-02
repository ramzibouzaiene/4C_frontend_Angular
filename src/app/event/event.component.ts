import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers: [EventsService]
})
export class EventComponent implements OnInit {

  events: any;
  
  constructor(private eventsService: EventsService , private route : ActivatedRoute ) { } 

  id = this.route.snapshot.params['id']
  
  ngOnInit() { 
    console.log(this.id)
    this.eventsService.getEvents(this.id).subscribe((data) => {
      console.log(data);
      this.events = data;
    }, (error) => {
      console.log("error in the Service");
    })
     
  } 

}
