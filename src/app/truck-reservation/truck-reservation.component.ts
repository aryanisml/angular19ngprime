import { Component, HostListener, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
interface StatusOption {
  label: string;
  value: string;
}


@Component({
  selector: 'app-truck-reservation',
  templateUrl: './truck-reservation.component.html',
  styleUrls: ['./truck-reservation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TabMenuModule,
    CalendarModule,
    CheckboxModule,
    TagModule,
    FormsModule
  ]
})
export class TruckReservationComponent implements OnInit {
  tabItems: MenuItem[] = [];
  activeTab: number = 0;
  filterStatus = signal('');
  
  statusOptions = [
    { name: 'All', value: '' },
    { name: 'Active', value: 'active' },
    { name: 'Completed', value: 'completed' },
    { name: 'Cancelled', value: 'cancelled' }
  ];
  
  onStatusChange(event: any) {
    // Update the signal value
    this.filterStatus.set(event.value);
    console.log('Status changed to:', event.value);
    // Your filter logic here
  }

  
  isFilterModalOpen = false;
  startDate: string | null = null;
  endDate: string | null = null;
  
  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }
  
  closeFilterModal(): void {
    this.isFilterModalOpen = true;
  }
  
 
  
  onStartDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.startDate = inputElement.value;
  }
  
  onEndDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.endDate = inputElement.value;
  }
  
  applyFilters(): void {
    const filters = {
      status: this.filterStatus,
      startDate: this.startDate,
      endDate: this.endDate
    };
    
    //this.filtersChanged.emit(filters);
    this.closeFilterModal();
  }
  
  // Close modal when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const clickedInside = targetElement.closest('app-filter-button');
    if (!clickedInside && this.isFilterModalOpen) {
      this.closeFilterModal();
    }
  }
  
  reservations = [
    { 
      id: '98765432', 
      customer: 'John Stone', 
      phone: '(215) 455 1212',
      vehicleType: 'Refrigerator', 
      tripType: 'One Way',
      pickupTime: '02/27/2025 01:25 PM',
      pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
      dropoffTime: '03/01/2025 04:15 PM',
      dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
      status: 'Confirmed'
    },
    { 
      id: '98765433', 
      customer: 'Brian Chase', 
      phone: '(302) 555 7890',
      vehicleType: 'Parcel Van', 
      tripType: 'Round Trip',
      pickupTime: '02/28/2025 09:30 AM',
      pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
      dropoffTime: '03/02/2025 11:45 AM',
      dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
      status: 'Active'
    },
    { 
      id: '98765434', 
      customer: 'Alexander Dough', 
      phone: '(717) 555 4321',
      vehicleType: 'Box Truck', 
      tripType: 'One Way',
      pickupTime: '03/01/2025 10:15 AM',
      pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
      dropoffTime: '03/03/2025 01:30 PM',
      dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
      status: 'Pending'
    }
  ];

  filterForm!: FormGroup;
  newReservationForm!: FormGroup;

  stats = {
    totalReservations: 32,
    unassignedReservations: 12,
    availableFleet: 43,
    pickupsToday: 15,
    dropoffsToday: 20,
    revenue: '$33M'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.tabItems = [
      { label: 'Reservation', icon: 'pi pi-calendar' },
      { label: 'Unit', icon: 'pi pi-truck' },
      { label: 'Tow & Supply', icon: 'pi pi-link' },
      { label: 'Customer', icon: 'pi pi-user' },
      { label: 'Payment', icon: 'pi pi-credit-card' },
      { label: 'Other Specs', icon: 'pi pi-cog' }
    ];

    this.filterForm = this.fb.group({
      customer: [''],
      reservationStatus: ['active'],
      vehicleType: [''],
      tripType: ['']
    });

    this.newReservationForm = this.fb.group({
      customer: ['', Validators.required],
      phone: ['', Validators.required],
      vehicleType: ['', Validators.required],
      pickupDate: ['', Validators.required],
      pickupTime: ['', Validators.required],
      pickupLocation: ['', Validators.required],
      dropoffDate: ['', Validators.required],
      dropoffTime: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      specialInstructions: ['']
    });
  }

  onFilter() {
    // Filter implementation would go here
    console.log('Filtering with:', this.filterForm.value);
  }

  onCreateReservation() {
    // Create reservation implementation would go here
    console.log('Creating reservation:', this.newReservationForm.value);
  }

  onTabChange(event: any) {
    this.activeTab = event.index;
  }
}