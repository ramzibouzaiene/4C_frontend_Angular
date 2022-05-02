import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu_api_url: string ='http://127.0.0.1:8000/api/activites';
  types_activites_url ="http://127.0.0.1:8000/api/type_activites"

  constructor(private http:HttpClient) { }

  getMenu(): Observable<any> {
    return this.http.get(this.menu_api_url);
  }

  getTypesActivites(){
    return this.http.get(this.types_activites_url)
  }
}
