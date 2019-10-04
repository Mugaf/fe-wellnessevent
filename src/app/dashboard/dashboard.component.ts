import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginData;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    //if(!this.loginService.loginData) this.router.navigate(['']);
  }

  ngOnInit() {
    this.loginData = this.loginService.loginData;
    console.warn(this.loginService.loginData);
  }

  

}
