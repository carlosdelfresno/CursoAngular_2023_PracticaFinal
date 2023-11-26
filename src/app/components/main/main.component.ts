import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VengadoresService } from '../../services/vengadores.service';
import { Vengador } from '../../models/Vengador';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { VengadorComponent } from '../vengador/vengador.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HttpClientModule, VengadorComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  vengadores: Vengador[] = [];

  vengadoresService = inject(VengadoresService);
  router = inject(Router);

  ngOnInit(): void {
    this.getVengadores();
  }

  getVengadores() {
    return this.vengadoresService.getVengadores().subscribe({
      next: (vengadores) => {
        this.vengadores = vengadores;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  vengadorEliminado() {
    this.getVengadores();
  }

  addVengador() {
    this.router.navigate(['/add']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
