import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckReservationComponent } from './truck-reservation.component';

describe('TruckReservationComponent', () => {
  let component: TruckReservationComponent;
  let fixture: ComponentFixture<TruckReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
