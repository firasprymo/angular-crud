import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProcessService } from 'src/app/shared/services/process.service';

@Component({
  selector: 'app-addprocess',
  templateUrl: './addprocess.component.html',
  styleUrls: ['./addprocess.component.css']
})
export class AddprocessComponent implements OnInit {
  form: FormGroup
  name: string
  feedback: any = {};

  constructor(private fb: FormBuilder,

    private router:Router,
    private processSer: ProcessService) {
    this.form = fb.group({
      name: [this.name, Validators.required],


    })
  }

  ngOnInit(): void {
  }
  onsave() {
    const changes = this.form.value
    console.log(changes);

    this.processSer.saveProcess(changes).then(() => {
      this.feedback = { type: 'success', message: 'Success' };
      this.router.navigate(['/user/show']);

    })
  }
  cancel() {
    this.router.navigate(['/user/show']);
  }
}
