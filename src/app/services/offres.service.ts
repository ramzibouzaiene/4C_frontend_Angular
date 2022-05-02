import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  private offre_api_url: string ='http://127.0.0.1:8000/api/offres';

  constructor(private http:HttpClient) { }

  getOffres(): Observable<any> {
    return this.http.get(this.offre_api_url)
  }
  throwError(error: any) {
    console.log(Error);
  }

}
