import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/shared/model/flight';
import { FlightFilter } from 'src/app/shared/model/flight-filter';
import { User } from 'src/app/shared/model/user';
import { FlightService } from 'src/app/shared/services/flight.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {

  filter = new FlightFilter();
  selectedFlight: Flight;
  feedback: any = {};
  users$: Observable<User[]>
  constructor(private flightService: FlightService, private userSer: UserService) {
  }
  ngOnInit() {
    this.search();
    this.users$ = this.userSer.findAllUsers()
    console.log(this.users$);
  }

  search(): void {
    this.flightService.load(this.filter);
  }

  select(selected: Flight): void {
    this.selectedFlight = selected;
  }

  delete(item) {
    if (confirm('Are you sure?')) {
       this.userSer.delete(item).then((src:any) => {
        // this.users$=[]
        this.feedback = { type: 'success', message: 'Delete was successful!' };
        setTimeout(() => {
          // this.users$ = this.userSer.findAllUsers();
        }, 1000);
      }, err => {
        this.feedback = { type: 'warning', message: 'Error deleting.' };
      }
      );
    }
  }
}
