import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { TruckReservationComponent } from "./truck-reservation/truck-reservation.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, ButtonComponent, TruckReservationComponent],
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19-test';
}
