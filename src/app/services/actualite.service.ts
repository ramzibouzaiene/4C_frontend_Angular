import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  private actualites_api_url: string = 'http://127.0.0.1:8000/api/actualites';
  private actualite_api_url: string = 'http://127.0.0.1:8000/api/actualite';

  constructor(private http: HttpClient, private router: Router) { }

  getActualites(id): Observable<any> {
    return this.http.get(this.actualites_api_url+'/'+id);
  }

  getActualite(id): Observable<any> {
    return this.http.get(this.actualite_api_url+'/'+id);
  }


}
