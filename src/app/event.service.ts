import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(token) {
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    let options = { headers: headers };
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

  addEvent(eventName, eventDetail, vendorId, proposedDate1, proposedDate2, proposedDate3, token) {
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    let options = {
      headers: headers
    };
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3030/api/v1/event', {
        eventName: eventName,
        eventDetail: eventDetail,
        vendorId: vendorId,
        proposedDate1: proposedDate1,
        proposedDate2: proposedDate2,
        proposedDate3: proposedDate3
      },
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

  rejectEvent(eventId, rejectReason, token){
    let headers = new HttpHeaders({
      'x-access-token': token
    })
    let options = {
      headers: headers
    };
    return new Promise((resolve, reject) => {
      this.http.put('http://localhost:3030/api/v1/event/reject', {
        eventId: eventId,
        rejectReason: rejectReason
      },
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
