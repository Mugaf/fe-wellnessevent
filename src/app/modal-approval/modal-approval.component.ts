import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { EventService } from '../event.service';
import { ModalRejectComponent } from '../modal-reject/modal-reject.component';
import { ModalApproveComponent} from '../modal-approve/modal-approve.component';

@Component({
  selector: 'app-modal-approval',
  templateUrl: './modal-approval.component.html',
  styleUrls: ['./modal-approval.component.css']
})
export class ModalApprovalComponent implements OnInit {
  @Input() idEvent;
  loginData;
  eventData;
  constructor(
    private activeModal: NgbActiveModal,
    private loginService: LoginService,
    private eventService: EventService,
    private modal: NgbModal
  ) {
    this.loginService.getLoginData()
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
        return this.eventData.data.filter(data => data.eventid == this.idEvent);
      })
      .then(res => {
        console.warn(res);
        this.eventData = res;
      })
      .catch((err) => {
        console.warn(err);
      })
  }

  ngOnInit() {
  }

  ifNotVendor(roleid, status) {
    if (roleid == 2 && status === "PENDING") return true;
    else return false;
  }

  rejectModal(eventId) {
    const modalRef = this.modal.open(ModalRejectComponent);
    modalRef.componentInstance.eventId = eventId;
    modalRef.result.then(data => {
      this.activeModal.close();
    })
    .catch(err => {
      console.warn(err);
      this.activeModal.close();
    })
  }

  approveModal(eventId) {
    const modalRef = this.modal.open(ModalApproveComponent);
    modalRef.componentInstance.eventId = eventId;
    modalRef.result.then(data => {
      this.activeModal.close();
    })
    .catch(err => {
      console.warn(err);
      this.activeModal.close();
    })
  }
}
