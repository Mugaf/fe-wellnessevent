import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username: 'Vendor2',
      password: 'b321'
    });
  }

  ngOnInit() {
  }

  onSubmit(loginData) {
    // Process login data here
    // console.warn('Your login data has been submitted', loginData);
    this.loginService.loginUser(loginData.username, loginData.password)
      .then(res => {
        this.loginService.saveLoginData(res);
        this.router.navigate(['/Dashboard'])
      })
      .catch(err =>{
        window.alert('username or password is wrong');
        console.warn(err);
      })
    
    this.loginForm.reset();
  }
}
