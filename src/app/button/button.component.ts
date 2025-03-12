import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [ButtonModule, 
     CommonModule,
    FormsModule,
    DropdownModule,
    CalendarModule,OverlayPanelModule],
  standalone:true,
  animations: [
    // You'll need to import trigger, transition, style, animate from @angular/animations
    // This creates a smooth fade-in effect
  
    
    trigger('panelAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('150ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(10px)' }))
      ])
    ])
  ]
})
export class ButtonComponent {
toggleDarkMode() {
   const element = document.querySelector('html');
   if (element!==null) {
    element.classList.toggle('my-app-dark');
   }
}
viewOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Next 3 days', value: 'next3days' },
  { label: 'Week', value: 'week' },
  { label: 'Custom', value: 'custom' }
];

selectedView: string = 'daily';
dateRange: Date[] = [new Date(), new Date()];
isPanelVisible: boolean = false;

constructor() {
  // Add click handler to close panel when clicking outside
  document.addEventListener('click', (event:any) => {
    if (this.isPanelVisible && !event['target'].closest('.custom-date-container')) {
      this.isPanelVisible = false;
    }
  });
}

ngOnInit() {
  this.updateDateSelection();
}

togglePanel(event: MouseEvent) {
  event.stopPropagation();
  this.isPanelVisible = !this.isPanelVisible;
}

getFormattedCurrentDate(): string {
  // This will show the currently selected date (or date range in a simplified form)
  const date = this.dateRange[0]; // Using the start date for display
  
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();
  
  // Add suffix to day (1st, 2nd, 3rd, etc.)
  const suffix = this.getDaySuffix(day);
  
  return `${month} ${day}${suffix}`;
}

private getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

updateDateSelection() {
  const today = new Date();
  
  switch(this.selectedView) {
    case 'daily':
      // Just select today
      this.dateRange = [today, today];
      break;
      
    case 'next3days':
      // Today plus next 2 days
      const threeDaysLater = new Date(today);
      threeDaysLater.setDate(today.getDate() + 2);
      this.dateRange = [today, threeDaysLater];
      break;
      
    case 'week':
      // Current week (Sunday to Saturday)
      const startOfWeek = new Date(today);
      const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
      startOfWeek.setDate(today.getDate() - dayOfWeek); // Move to Sunday
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6); // Move to Saturday
      
      this.dateRange = [startOfWeek, endOfWeek];
      break;
      
    case 'custom':
      // If in custom mode and no range is selected, default to a week
      if (!this.dateRange || this.dateRange.length !== 2) {
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);
        this.dateRange = [today, nextWeek];
      }
      break;
  }
}

onDateSelect(event: any) {
  // If in custom mode, allow user selection
  // Otherwise, enforce the view's range
  if (this.selectedView !== 'custom') {
    setTimeout(() => {
      this.updateDateSelection();
    }, 0);
  }
}

getFormattedDateResult(): string {
  if (this.dateRange && this.dateRange.length === 2) {
    // Check if it's a single day
    if (this.selectedView === 'daily' || 
        (this.dateRange[0].getDate() === this.dateRange[1].getDate() &&
         this.dateRange[0].getMonth() === this.dateRange[1].getMonth() &&
         this.dateRange[0].getFullYear() === this.dateRange[1].getFullYear())) {
      return this.formatDate(this.dateRange[0]);
    } else {
      return `${this.formatDate(this.dateRange[0])} to ${this.formatDate(this.dateRange[1])}`;
    }
  }
  return '';
}

private formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}
}
