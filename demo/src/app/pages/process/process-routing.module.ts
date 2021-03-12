import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprocessComponent } from './addprocess/addprocess.component';
import { AssignprocessComponent } from './assignprocess/assignprocess.component';
import { ShowprocessComponent } from './showprocess/showprocess.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'add',
      component: AddprocessComponent
    },

    {
      path: 'assign',
      component: AssignprocessComponent
    },
    {
      path: 'show',
      component: ShowprocessComponent
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
