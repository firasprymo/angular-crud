import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/services/user.service';
import { log } from 'util';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  id: string;
  user: User;
  feedback: any = {};
  form: FormGroup
  name: string
  role: string
  email: string
  dateofbirth: string
  password: string
  constructor(
    private fb: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private userSer: UserService) {
    this.form = fb.group({
      name: [this.name, Validators.required],
      role: [this.role, Validators.required],
      email: [this.email, Validators.required],
      dateofbirth: [this.dateofbirth, Validators.required],
      password: [this.password, Validators.required]
    })
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          console.log(id);
          
          if (!id ) { return of(new User()); }
          return this.userSer.findById(id);
        })
      )
      .subscribe(user => {
        console.log(user);
          this.user = user;
          // user
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  onsave() {
    const changes = this.form.value
    console.log(changes);
    
    this.userSer.saveUser(changes).then(() => {
      this.feedback = { type: 'success', message: 'Success' };
      this.router.navigate(['/user/show']);

    })
  }

  cancel() {
    this.router.navigate(['/user/show']);
  }
}
