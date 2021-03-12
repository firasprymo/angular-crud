import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from 'src/app/shared/model/process';
import { User } from 'src/app/shared/model/user';
import { ProcessService } from 'src/app/shared/services/process.service';
import { UserService } from 'src/app/shared/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assignprocess',
  templateUrl: './assignprocess.component.html',
  styleUrls: ['./assignprocess.component.css']
})
export class AssignprocessComponent implements OnInit {
  process$: Observable<Process[]>
  users$: Observable<User[]>
  form: FormGroup
  name: string
  user: string
  feedback: any = {};
  constructor(private usersSer: UserService,
    private router:Router,
    private fb: FormBuilder,
    private processSer: ProcessService) {
      this.form = fb.group({
        user: [this.user, Validators.required],
        name: [this.name, Validators.required],


      })
  }

  ngOnInit(): void {
    this.process$ = this.processSer.findAllProcesss()
    this.users$ = this.usersSer.findAllUsers()
  }

  assignProcess() {
    const changes = this.form.value
    console.log(changes);

    this.processSer.assignProcess(changes).then(() => {
      this.feedback = { type: 'success', message: 'Success' };
      this.router.navigate(['/user/show']);

    })
  }
  cancel() {
    this.router.navigate(['/process/show']);
  }
}
