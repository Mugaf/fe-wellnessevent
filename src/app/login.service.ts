import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData;
  constructor(
    private http: HttpClient
  ) { }

  loginUser(username, password) {
    return new Promise((resolved, rejected) => {
      this.http.post('http://localhost:3030/api/v1/user/login',
        { username: username, password: password }).subscribe(
          res => {
            resolved(res);
          },
          err => {
            rejected(err);
          }
        );
    }
    );
  }

  saveLoginData(data){
    this.loginData = data;
  }
  
  getLoginData(){
    return new Promise((resolve, reject) => {
      resolve (this.loginData);
    })
  }
}
