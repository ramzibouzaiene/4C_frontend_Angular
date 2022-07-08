import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private activites_api_url: string = 'http://127.0.0.1:8000/api/activites';
  private activite_api_url: string = 'http://127.0.0.1:8000/api/activite';


  constructor(private http:HttpClient) { }

  getActivites(id): Observable<any> {
    return this.http.get(this.activites_api_url+'/'+id );
  } 
   getActivity(id): Observable<any> {
    return this.http.get(this.activite_api_url+'/'+id );
  } 

}
