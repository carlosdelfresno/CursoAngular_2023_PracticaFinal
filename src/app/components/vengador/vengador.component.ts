import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VengadoresService } from '../../services/vengadores.service';
import { Router } from '@angular/router';
import { Vengador } from '../../models/Vengador';

@Component({
  selector: 'app-vengador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vengador.component.html',
  styleUrl: './vengador.component.css',
})
export class VengadorComponent {
  vengadoresService = inject(VengadoresService);
  router = inject(Router);

  @Input() vengador!: Vengador;
  @Output() delete = new EventEmitter<void>();

  editVengador(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteVengador(id: number) {
    this.vengadoresService.deleteVengador(id).subscribe({
      next: (vengador) => {
        console.log(vengador);
        this.delete.emit();
      },
      error: (err) => console.log(err),
    });
  }
}
