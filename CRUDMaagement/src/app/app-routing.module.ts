import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmoployeesListComponent } from './components/emoployees-list/emoployees-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:'employees',
    component:EmoployeesListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  },
  {
    path:'departments',
    component: DepartmentListComponent
  },
  {
    path:'departments/add',
    component:AddDepartmentComponent
  },
  {
    path:'departments/edit/:id',
    component:EditDepartmentComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
