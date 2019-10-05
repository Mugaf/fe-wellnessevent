import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoginService } from '../login.service';
import { EventService } from '../event.service'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddComponent } from '../modal-add/modal-add.component';
import { ModalApprovalComponent } from '../modal-approval/modal-approval.component';

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
    private eventService: EventService,
    private modal : NgbModal
  ) { 
    this.displayEvent();
  }

  ngOnInit() {
    
  }
  checkifHR(){
    if(this.dataUser.data.roleid == 3) return true;
    else return false;
  }

  callAddModal(){
    this.modal.open(ModalAddComponent);
  }

  viewEvent(idEvent){
    const modalRef = this.modal.open(ModalApprovalComponent);
    modalRef.componentInstance.idEvent = idEvent;
    modalRef.result.then(data => {
      this.displayEvent();
    })
    .catch(err => {
      console.warn(err);
    })
  }

  displayEvent(){
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
          return true
        })
        .catch(err => {
          console.warn(err);
        })
      })
  }
}
