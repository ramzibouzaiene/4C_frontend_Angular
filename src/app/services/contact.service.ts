import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

const AUTH_API = 'http://127.0.0.1:8000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  Contact(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/contacts', body, httpOptions )

 }
 throwError(error: any) {
    console.error(error);
    //return throwError(error.json().error || 'Server error');
  }


}
