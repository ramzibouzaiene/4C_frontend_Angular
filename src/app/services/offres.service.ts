import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  private offres_api_url: string ='http://127.0.0.1:8000/api/offres';
  private offre_api_url: string ='http://127.0.0.1:8000/api/offre';

  constructor(private http:HttpClient) { }

  getOffres(id): Observable<any> {
    return this.http.get(this.offres_api_url+'/'+id)
  }
  
  getOffre(id): Observable<any> {
    return this.http.get(this.offre_api_url+'/'+id)
  }

}
