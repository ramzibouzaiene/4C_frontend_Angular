import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contact_api_url: string = 'http://127.0.0.1:8000/api/contacts';

  constructor(private http:HttpClient) { }

  getContact(): Observable<any> {
    return this.http.get(this.contact_api_url )

 }
 throwError(error: any) {
    console.error(error);
    //return throwError(error.json().error || 'Server error');
  }


}
