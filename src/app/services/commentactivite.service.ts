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
export class CommentactiviteService {


  constructor(private http:HttpClient, private router: Router) { }

  Comments(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/comment_activites', body, httpOptions);
  }

  throwError(error: any) {
    console.error(error);
  }

  getComments(): Observable<any> {
    return this.http.get(AUTH_API+ '/comment_activites');
  } 
}
