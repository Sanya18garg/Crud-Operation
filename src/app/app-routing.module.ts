import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {UpdateComponent} from './update/update.component';
import {DetailsComponent} from './details/details.component';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'create', component: AddComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: 'view/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
