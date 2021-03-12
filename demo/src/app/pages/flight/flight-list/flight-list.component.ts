import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/shared/model/flight';
import { FlightFilter } from 'src/app/shared/model/flight-filter';
import { FlightService } from 'src/app/shared/services/flight.service';



@Component({
  selector: 'app-flight',
  templateUrl: 'flight-list.component.html'
})
export class FlightListComponent implements OnInit {

  filter = new FlightFilter();
  selectedFlight: Flight;
  feedback: any = {};

  get flightList(): Flight[] {
    return this.flightService.flightList;
  }

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.flightService.load(this.filter);
  }

  select(selected: Flight): void {
    this.selectedFlight = selected;
  }

  delete(flight: Flight): void {
    if (confirm('Are you sure?')) {
      this.flightService.delete(flight).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
