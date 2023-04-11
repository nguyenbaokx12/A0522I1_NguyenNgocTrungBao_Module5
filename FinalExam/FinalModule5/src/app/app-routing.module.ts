import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Student/list/list.component';
import { CreateComponent } from './Student/create/create.component';


const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "student/create", component: CreateComponent },
  { path: "student/edit/:id", component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
