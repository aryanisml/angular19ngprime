import { Routes } from '@angular/router';
import { TruckReservationComponent } from './truck-reservation/truck-reservation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'reservations', pathMatch: 'full' },
  { path: 'reservations', component: TruckReservationComponent },
  { path: '**', redirectTo: 'reservations' }
];
