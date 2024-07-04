import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login(): void {
    if (this.loginForm.valid) {
      const { dni, password } = this.loginForm.value;
      this.loginService.login(dni, password)
      .subscribe(
        response => {
          this.router.navigate(['/pending-orders']);
      }, error => {
        console.error('Login error', error);
      });
    }
  }
}