import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

// start Modal Logout
@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Confirm Logout</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to Logout </strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="LogoutConfirm()">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  constructor(
    public modal: NgbActiveModal,
    private loginService: LoginService,
    private router: Router) {}

  LogoutConfirm(){
    this.loginService.loginData = {};
    this.modal.close('click Ok');
    this.router.navigate(['']);
  }
}
// end Modal Logout

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  LogoutQuestion(){
    this.modalService.open(NgbdModalConfirmAutofocus);
  }

}
