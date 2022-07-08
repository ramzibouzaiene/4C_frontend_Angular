import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private library_api_url: string ='http://127.0.0.1:8000/api/sujets';

  constructor(private http:HttpClient) { }

  getLibrary(): Observable<any> {
    return this.http.get(this.library_api_url);
  }
}
