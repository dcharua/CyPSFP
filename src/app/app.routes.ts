import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UploadComponent } from './upload';
import { AuthGuard } from './_guards';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent,  canActivate: [AuthGuard]  },
  { path: 'upload', component: UploadComponent,  canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
