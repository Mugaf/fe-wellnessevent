import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(token){
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    let options = { headers: headers};
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3030/api/v1/event',
         options).subscribe(
           res => {
            resolve(res);
           },
           err => {
            reject(err);
           }
         )
    })
  }
}
