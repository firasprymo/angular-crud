import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ShowusersComponent } from './showusers/showusers.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'show',
      component: ShowusersComponent
    },
    {
      path: 'add',
      component: AdduserComponent
    },
    {
      path: 'edit/:id',
      component: AdduserComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
