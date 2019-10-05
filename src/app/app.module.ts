import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopBarComponent, NgbdModalConfirmAutofocus } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalApprovalComponent } from './modal-approval/modal-approval.component';
import { ModalRejectComponent } from './modal-reject/modal-reject.component';
import { ModalApproveComponent } from './modal-approve/modal-approve.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopBarComponent,
    NgbdModalConfirmAutofocus,
    EventDetailsComponent,
    ModalAddComponent,
    ModalApprovalComponent,
    ModalRejectComponent,
    ModalApproveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'Dashboard', component: DashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ 
    NgbdModalConfirmAutofocus, 
    ModalAddComponent, 
    ModalApprovalComponent,
    ModalRejectComponent,
    ModalApproveComponent
  ]
})
export class AppModule { }
