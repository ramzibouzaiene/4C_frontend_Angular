import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footer_api_url: string = 'http://127.0.0.1:8000/api/footer';

  constructor(private http:HttpClient) { }

  getFooter(): Observable<any> {
    return this.http.get(this.footer_api_url);
  }
}
