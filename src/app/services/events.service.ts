import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events_api_url: string = 'http://127.0.0.1:8000/api/activites/';

  constructor(private http:HttpClient) { }

  getEvents(id): Observable<any> {
    return this.http.get(this.events_api_url+id );
  } 

}
