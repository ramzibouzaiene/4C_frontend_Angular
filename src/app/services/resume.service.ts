import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

const AUTH_API = 'http://127.0.0.1:8000/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private summ_api_url: string = 'http://127.0.0.1:8000/api/getsum';
  private exp_api_url: string = 'http://127.0.0.1:8000/api/getexp';
  private skills_api_url: string = 'http://127.0.0.1:8000/api/getskills';
  private educ_api_url: string = 'http://127.0.0.1:8000/api/geteduc';

  constructor(private http: HttpClient, private router: Router) { }

  Experience(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/resume', body, httpOptions);
  }

  getExperience(): Observable<any> {
    return this.http.get(this.exp_api_url);
  }

  Education(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/resumeducation', body, httpOptions);
  }

  getEducation(): Observable<any> {
    return this.http.get(this.educ_api_url);
  }

  Sammury(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/summary', body, httpOptions);
  }
  getSammury(): Observable<any> {
    return this.http.get(this.summ_api_url);
  }

  Skills(body): Observable<any> {
    console.log(body)
    return this.http.post(AUTH_API + '/skills', body, httpOptions);
  }

  getSkills(): Observable<any> {
    return this.http.get(this.skills_api_url);
  }
}
