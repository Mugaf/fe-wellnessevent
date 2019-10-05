import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { EventService } from '../event.service';
import { LoginService } from '../login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-modal-reject',
  templateUrl: './modal-reject.component.html',
  styleUrls: ['./modal-reject.component.css']
})
export class ModalRejectComponent implements OnInit {
@Input() eventId;
rejectForm;
loginData;
  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private eventService: EventService,
    private loginService: LoginService,
    private router: Router
  ) { 
    this.rejectForm = this.formBuilder.group({
      rejectReason : ''
    });
    console.warn(this.eventId);
    this.loginService.getLoginData()
    .then(res => {
      this.loginData = res;
      return this.loginData;
    })
    .catch(err =>{
      console.warn(err);
    })
  }

  ngOnInit() {
  }

  onSubmit(data){
    this.eventService.rejectEvent(this.eventId, data.rejectReason, this.loginData.token)
    .then(res =>{
      window.alert('data submitted!');
      this.activeModal.close();
    })
    .catch(err => {
      console.warn(err);
    })
  }
}
