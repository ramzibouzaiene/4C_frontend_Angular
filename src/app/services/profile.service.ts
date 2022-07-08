import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

const AUTH_API = 'http://127.0.0.1:8000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private router: Router) { }

  Update(id:number, data:any):Observable<any> {
    return this.http.put(AUTH_API + '/updateprofile/{id}', data, httpOptions);
  }

  ChangePass(data:any) :Observable<any> {
    return this.http.put(AUTH_API + '/changepassword/', data, httpOptions);
  }
}
