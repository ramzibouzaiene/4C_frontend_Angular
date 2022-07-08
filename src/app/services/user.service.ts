import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'ttp://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
 

  getAll() {
        return this.http.get<User[]>(`${API_URL}/users`);
    }

  getById(id: number) {
        return this.http.get<User>(`${API_URL}/users/${id}`);
    }
}
