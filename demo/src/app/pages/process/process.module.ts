import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { AddprocessComponent } from './addprocess/addprocess.component';
import { AssignprocessComponent } from './assignprocess/assignprocess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowprocessComponent } from './showprocess/showprocess.component';


@NgModule({
  declarations: [AddprocessComponent, AssignprocessComponent, ShowprocessComponent],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProcessModule { }
