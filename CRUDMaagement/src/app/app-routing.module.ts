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
import { AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { SidenaveComponent } from './shared/sidenave/sidenave.component';
import { UnauthrizedComponent } from './components/unauthrized/unauthrized.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent,
    
  },
  {
    path:"Unauthrized",
    component:UnauthrizedComponent,
    
  },
  
  {
    path:"dashboard",
    component:SidenaveComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'employees', component: EmoployeesListComponent },
      { path: 'employees/add', component: AddEmployeeComponent },
      { path: 'employees/edit/:id', component: EditEmployeeComponent },
      { path: 'departments', component: DepartmentListComponent },
      { path: 'departments/add', component: AddDepartmentComponent },
      { path: 'departments/edit/:id', component: EditDepartmentComponent } 
       
    ],
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'employees',
    component:EmoployeesListComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'employees/add',
    component:AddEmployeeComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'departments',
    component: DepartmentListComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'departments/add',
    component:AddDepartmentComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'departments/edit/:id',
    component:EditDepartmentComponent,
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path:'register',
    component:RegisterComponent,
     
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'page',
    component:EmployeePageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
