import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  
  private partners_api_url: string = 'http://127.0.0.1:8000/api/partenaires';

  constructor(private http: HttpClient) { }

  getPartners(): Observable<any> {
    return this.http.get(this.partners_api_url);
  }

}
