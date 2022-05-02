import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'ttp://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  //const metohod2 = { responseType: 'text' }''
  getPublicContent(): Observable<any> {
    return this.http.get(`${API_URL}all`);
  }
  
  logoutUser(): Observable<any> {
    return this.http.get(`${API_URL}logout`);
  }
}
