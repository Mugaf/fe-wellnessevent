import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { LoginService } from '../login.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {
  addForm;
  vendors;
  loginData;
  resultSave;
  proposedDates;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private vendorService: VendorService,
    private loginService: LoginService,
    private eventService: EventService
  ) {
    this.addForm = this.formBuilder.group({
      eventname: '',
      eventdetail: '',
      vendorid: '',
      proposeddate1: '',
      proposeddate2: '',
      proposeddate3: '',
    });
    this.loginService.getLoginData()
      .then(res => {
        this.loginData = res
        return res;
      })
      .then(res => {
        return this.vendorService.getListVendors(this.loginData.token);
      })
      .then(res => {
        this.vendors = res;
        console.warn(res);
      })
      .catch(err => {
        console.warn(err);
      })
  }

  ngOnInit() {
  }
  checkIfFirstIndex(index) {
    if (index == 1) return true;
    else return false;
  }
  onSubmit(data) {
    console.warn(data);
    new Promise((resolve, reject) => {
      resolve(true);
    })
      .then(res => {
        this.proposedDates = {
          proposeddate1: this.defaultDateFormat(data.proposeddate1),
          proposeddates: this.defaultDateFormat(data.proposeddate2),
          proposeddate3: this.defaultDateFormat(data.proposeddate3)
        }
        return true;
      })
      .then(res => {
        this.eventService.addEvent(data.eventname, data.eventdetail, data.vendorid,
          this.proposedDates.proposeddate1,
          this.proposedDates.proposeddate2,
          this.proposedDates.proposeddate3,
          this.loginData.token)
      })
      .then(res => {
        this.resultSave = res;
        return true;
      })
      .then(res => {
        window.alert('data added!');
        this.activeModal.close();
      })
      .catch(err => {
        console.warn(err);
      })
  }
  defaultDateFormat(objectDate) {
    const Date = `${objectDate.year}-${objectDate.month}-${objectDate.day}`;
    return Date;
  }
}
