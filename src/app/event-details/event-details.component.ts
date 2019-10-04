import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { EventService } from '../event.service'; 

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  events;
  dataUser;
  constructor(
    private loginService: LoginService,
    private eventService: EventService
  ) { 
    this.loginService.getLoginData()
      .then(result => {
        this.dataUser = result
        const token = result['token']
        return token
      })
      .then(result2 => {
        this.eventService.getEvents(result2)
        .then(res => {
          console.warn(res);
          this.events = res
        })
        .catch(err => {
          console.warn(err);
        })
      })
  }

  ngOnInit() {
    
  }
  checkifHR(){
    if(this.dataUser.data.roleid == 3) return true;
    else return false;
  }

}
