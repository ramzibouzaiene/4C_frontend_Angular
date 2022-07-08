import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private media_api_url: string = 'http://127.0.0.1:8000/api/albums';
  private photo_api_url: string = 'http://127.0.0.1:8000/api/photos';

  constructor(private http:HttpClient) { }

  getMedia(): Observable<any> {
    return this.http.get(this.media_api_url);
  } 

  getPhotos(id):Observable<any>{
    return this.http.get(this.photo_api_url+'/'+id);
  }
  throwError(error: any) {
    console.error(error);
   // return throwError(error.json().error || 'Server error');
  }
}
