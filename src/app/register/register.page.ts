import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/auth/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errorMessage: string = "";

  registerForm = this.formBuilder.group({
    dni: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    telefono: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    if (this.registerForm.valid) {
      this.loginService.register(this.registerForm.value).subscribe(response => {
        console.log("Registro exitoso");
        this.router.navigate(['/login']);
      }, error => {
        this.errorMessage = error;
      });
    }
  }
}