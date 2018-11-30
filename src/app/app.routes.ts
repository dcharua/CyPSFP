import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { UploadComponent } from './upload';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'upload', component: UploadComponent },
];
