import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NuevoVengadorComponent } from './components/nuevo-vengador/nuevo-vengador.component';
import { EditarVengadorComponent } from './components/editar-vengador/editar-vengador.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authGuard],
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
  {
    path: 'add',
    component: NuevoVengadorComponent,
    canActivate: [authGuard],
  },
  {
    path: 'edit/:id',
    component: EditarVengadorComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
