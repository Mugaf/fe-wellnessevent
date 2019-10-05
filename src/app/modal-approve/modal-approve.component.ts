import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-modal-approve',
  templateUrl: './modal-approve.component.html',
  styleUrls: ['./modal-approve.component.css']
})
export class ModalApproveComponent implements OnInit {
@Input() eventId;
approveForm;
eventData;
loginData;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal,
    private loginService: LoginService,
    private eventService: EventService,
  ) { 
    this.approveForm = formBuilder.group({
      confirmedDate : ''
    });

    this.getEventData()
      .then(() => {
        //do something here after get event data
      })
      .catch(err =>{
        console.warn(err);
      })
  }

  ngOnInit() {
  }

  getEventData(){
    return this.loginService.getLoginData()
      .then(res => {
        this.loginData = res;
        return true;
      })
      .then(res => {
        return this.eventService.getEvents(this.loginData.token)
      })
      .then(res => {
        this.eventData = res;
        return this.eventData;
      })
      .then(res => {
        console.warn(this.eventData);
        return this.eventData.data.filter(data => data.eventid == this.eventId);
      })
      .then(res => {
        console.warn(res);
        this.eventData = res;
      })
  }

  onSubmit(data){
    if(data.confirmedDate === "") return window.alert("choose your date please!");
    return this.eventService.approveEvent(this.eventId, data.confirmedDate, this.loginData.token)
    .then(res => {
      window.alert('data submitted!');
      this.activeModal.close();
    })
    .catch(err => {
      window.alert(err);
      console.warn(err);
    })
  }
}
