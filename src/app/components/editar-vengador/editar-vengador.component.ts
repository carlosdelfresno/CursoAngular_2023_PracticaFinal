import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { Vengador } from '../../models/Vengador';
import { VengadoresService } from '../../services/vengadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-vengador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar-vengador.component.html',
  styleUrl: './editar-vengador.component.css',
})
export class EditarVengadorComponent {
  vengadoresService = inject(VengadoresService);
  router = inject(Router);

  myForm: FormGroup;
  vengador!: Vengador;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      realname: new FormControl(''),
      team: new FormControl(''),
      firstappearance: new FormControl(''),
      createdby: new FormControl(''),
      publisher: new FormControl(''),
      imageurl: new FormControl(''),
      bio: new FormControl(''),
    });
  }
  @Input()
  set id(vengadorId: number) {
    this.vengadoresService.getVengador(vengadorId).subscribe({
      next: (vengador) => {
        this.vengador = vengador;
        this.myForm.patchValue(this.vengador);
      },
      error: (err) => console.log(err),
    });
  }

  editVengador() {
    if (this.myForm.invalid) {
      return;
    }

    this.vengadoresService
      .editVengador(this.vengador.id, this.myForm.value)
      .subscribe({
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
