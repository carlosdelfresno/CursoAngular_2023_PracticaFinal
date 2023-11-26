import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { VengadoresService } from '../../services/vengadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-vengador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nuevo-vengador.component.html',
  styleUrl: './nuevo-vengador.component.css',
})
export class NuevoVengadorComponent {
  myForm: FormGroup;

  vengadoresService = inject(VengadoresService);
  router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      realname: new FormControl('', [Validators.required]),
      team: new FormControl('', [Validators.required]),
      firstappearance: new FormControl('', [Validators.required]),
      createdby: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      imageurl: new FormControl('', [Validators.required]),
      bio: new FormControl('', [Validators.required]),
    });
  }

  addVengador() {
    if (this.myForm.invalid) {
      console.log(this.myForm);
      
      return;
    }

    console.log(this.myForm.value);
    this.vengadoresService.addVengador(this.myForm.value).subscribe({
      next: (vengador) => {
        console.log(vengador);
        this.router.navigate(['/main']);
      },
      error: (err) => console.log(err),
    });
  }

  cancelar() {
    this.router.navigate(['/main']);
  }
}
