import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private certif_api_url: string = 'http://127.0.0.1:8000/api/certif';

  constructor(private http:HttpClient) { }

  getCertification(): Observable<any> {
    return this.http.get(this.certif_api_url);
  }
}
