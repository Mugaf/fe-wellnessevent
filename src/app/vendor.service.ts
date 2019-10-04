import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private http: HttpClient
  ) { }

  getListVendors(token){
    return new Promise((resolve, reject) => {
      let headers = new HttpHeaders({
        'x-access-token': token
      })
      let options = { headers: headers};
      this.http.get('http://localhost:3030/api/v1/vendor', options).subscribe(
        res => {
          resolve(res);
        },
        err =>{
          reject(err);
        })
    })
  }
}
