import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowusersComponent } from './showusers/showusers.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [UsersComponent, ShowusersComponent, AdduserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class UsersModule { }
