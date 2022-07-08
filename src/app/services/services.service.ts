import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private service_api_url: string = 'http://127.0.0.1:8000/api/service';
  type_services_url ="http://127.0.0.1:8000/api/type_services"

  constructor(private http:HttpClient) { }

  getService(): Observable<any> {
    return this.http.get(this.service_api_url );
  } 

  getTypesService(){
    return this.http.get(this.type_services_url)
  }
}
