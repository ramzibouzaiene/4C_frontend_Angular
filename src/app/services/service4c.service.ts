import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service4cService {

  private services_api_url: string ='http://127.0.0.1:8000/api/services';

  constructor(private http:HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(this.services_api_url);
  }
}
