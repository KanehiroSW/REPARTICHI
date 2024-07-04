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
      dniPropietario: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  ngOnInit() {}

  login(): void {
    if (this.loginForm.valid) {
      const { dniPropietario, password, userType } = this.loginForm.value;
      this.loginService.login(dniPropietario, password)
      .subscribe(
        response => {
          if (userType === 'Restaurante') {
            this.router.navigate(['/tabs/tab1']);
          } else if (userType === 'Repartidor') {
            this.router.navigate(['/order-deliman']);
          }
      }, error => {
        console.error('Login error', error);
      });
    }
  }
}