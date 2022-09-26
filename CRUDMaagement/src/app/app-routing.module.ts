import { TaskActionItDirectorComponent } from './components/task-action-it-director/task-action-it-director.component';
import { TaskActionItManagerComponent } from './components/task-action-it-manager/task-action-it-manager.component';
import { TaskActionHrManagerComponent } from './components/task-action-hr-manager/task-action-hr-manager.component';
import { TaskActionHrComponent } from './components/task-action-hr/task-action-hr.component';
import { TaskActionFinanceComponent } from './components/task-action-finance/task-action-finance.component';
import { ItDepartmentDirectorTaskListComponent } from './components/it-department-director-task-list/it-department-director-task-list.component';
import { HrManagerTaskListComponent } from './components/hr-manager-task-list/hr-manager-task-list.component';
import { FinanceTaskListComponent } from './components/finance-task-list/finance-task-list.component';
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
import { HRTaskListComponent } from './components/hr-task-list/hr-task-list.component';
import { ItTaskListComponent } from './components/it-task-list/it-task-list.component';
import { TaskActionItComponent } from './components/task-action-it/task-action-it.component';


const routes: Routes = [
    {
    path:"company",
    component:SidenaveComponent,
    children: [
      {
    path:"Unauthrized",
    component:UnauthrizedComponent,
  },
      {
    path:"hrlist",
    component:HRTaskListComponent,
  },{
    path:"itlist",
    component:ItTaskListComponent,
  },
  {
    path:"hrmanagerlist",
    component:HrManagerTaskListComponent,
  },
  {
    path:"itdirectorlist",
    component: ItDepartmentDirectorTaskListComponent,
  },
  {
    path:"financelist",
    component:FinanceTaskListComponent,
  },
  {
    path:"financelist/financetask/:id",
    component:TaskActionFinanceComponent,
  },
  {
    path:"hrlist/hrtask/:id",
    component:TaskActionHrComponent,
  },
  {
    path:"itlist/ittask/:id",
    component:TaskActionItComponent,
  },
  {
    path:"hrmanagerlist/hrmanagertask/:id",
    component:TaskActionHrManagerComponent,
  },
  {
    path:"itmanager",
    component:TaskActionItManagerComponent,
  },
  {
    path:"itdirectorlist/itdirectortask/:id",
    component:TaskActionItDirectorComponent,
  },
    ]
    },
  {
    path:"",
    component:LoginComponent,

  },
  {
    path:"Unauthrized",
    component:UnauthrizedComponent,
  },
  //  {
  //   path:"financelist",
  //   component:FinanceTaskListComponent,
  // },
  // {
  //   path:"hrlist",
  //   component:HRTaskListComponent,
  // },
  // {
  //   path:"itlist",
  //   component:ItTaskListComponent,
  // },
  // {
  //   path:"hrmanagerlist",
  //   component:HrManagerTaskListComponent,
  // },
  // {
  //   path:"itdirectorlist",
  //   component: ItDepartmentDirectorTaskListComponent,
  // },{
  //   path:"financelist/financetask/:id",
  //   component:TaskActionFinanceComponent,
  // },
  // {
  //   path:"hrlist/hrtask/:id",
  //   component:TaskActionHrComponent,
  // },
  // {
  //   path:"itlist/ittask/:id",
  //   component:TaskActionItComponent,
  // },
  // {
  //   path:"hrmanagerlist/hrmanagertask/:id",
  //   component:TaskActionHrManagerComponent,
  // },
  // {
  //   path:"itmanager",
  //   component:TaskActionItManagerComponent,
  // },
  // {
  //   path:"itdirectorlist/itdirectortask/:id",
  //   component:TaskActionItDirectorComponent,
  // },



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
