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
  selectedFile: File | null = null;

  registerForm = this.formBuilder.group({
    nombreTienda: ['', Validators.required],
    nombrePropietario: ['', Validators.required],
    dniPropietario: ['', Validators.required],
    direccion: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  register() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      if (this.selectedFile) {
        this.loginService.register(formData, this.selectedFile).subscribe({
          next: () => {
            console.log("Registro exitoso");
            this.router.navigate(['/login']);
          },
          error: (error) => {
            this.errorMessage = error;
          }
        });
      } else {
        this.errorMessage = "Seleccione una imagen";
      }
    }
  }
}