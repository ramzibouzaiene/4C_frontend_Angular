import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private http:HttpClient,private tokenStorage: TokenStorageService) { }

  forget(email){
      return this.http.post('http://127.0.0.1:8000/api/forget-password',{
        params: {
          email:email
        }

      });
    }
  changePassword(old_password,new_password,confirm_password){
      let parameters = new HttpHeaders();
      parameters = parameters.set('Authorization', "Bearer "+ localStorage.getItem('token'));
      const data = {
        old_password:old_password,
        new_password: new_password,
        confirm_password:confirm_password
      }
      return this.http.post('http://127.0.0.1:8000/api/change-password',data,{headers:parameters  })

    }

    reset(token,password,password_confirmation){
      const data={
        token:token,
        password:password,
        password_confirmation:password_confirmation
      }
      return this.http.post('http://127.0.0.1:8000/api/reset-password',data)
    }


}
