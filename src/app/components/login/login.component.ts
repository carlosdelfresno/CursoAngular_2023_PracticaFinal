import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  myForm: FormGroup;

  authSevice = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.myForm = new FormGroup({});
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      usuario: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      alert('Formulario inválido');
      return;
    }

    if (
      this.authSevice.login(
        this.myForm.value.usuario,
        this.myForm.value.password
      )
    ) {
      this.router.navigate(['/main']);
    } else {
      alert('Login incorrecto');
      this.myForm.reset();
    }
  }
}
