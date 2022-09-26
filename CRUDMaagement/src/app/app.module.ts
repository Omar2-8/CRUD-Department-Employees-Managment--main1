import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmoployeesListComponent } from './components/emoployees-list/emoployees-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {ChartModule} from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule } from '@angular/forms';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { TokenInterceptor } from './shared/TokenInterceptor';
import { SidenaveComponent } from './shared/sidenave/sidenave.component';
import { UnauthrizedComponent } from './components/unauthrized/unauthrized.component';

import { TaskListComponent } from './components/task-list/task-list.component';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

import { HRTaskListComponent } from './components/hr-task-list/hr-task-list.component';

import { HrManagerTaskListComponent } from './components/hr-manager-task-list/hr-manager-task-list.component';
import { TaskActionHrManagerComponent } from './components/task-action-hr-manager/task-action-hr-manager.component';
import { FinanceTaskListComponent } from './components/finance-task-list/finance-task-list.component';
import { TaskActionFinanceComponent } from './components/task-action-finance/task-action-finance.component';
import { ItTaskListComponent } from './components/it-task-list/it-task-list.component';
import { TaskActionItComponent } from './components/task-action-it/task-action-it.component';
import { TaskActionItManagerComponent } from './components/task-action-it-manager/task-action-it-manager.component';
import { ItDepartmentDirectorTaskListComponent } from './components/it-department-director-task-list/it-department-director-task-list.component';
import { TaskActionItDirectorComponent } from './components/task-action-it-director/task-action-it-director.component';
import { TaskActionHrComponent } from './components/task-action-hr/task-action-hr.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}


@NgModule({
  declarations: [
    AppComponent,
    EmoployeesListComponent,
    AddEmployeeComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    EditEmployeeComponent,
    EditDepartmentComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    EmployeePageComponent,
    SidenaveComponent,
    UnauthrizedComponent,
    TaskListComponent,
    HRTaskListComponent,
    HrManagerTaskListComponent,
    TaskActionHrManagerComponent,
    FinanceTaskListComponent,
    TaskActionFinanceComponent,
    ItTaskListComponent,
    TaskActionItComponent,
    TaskActionItManagerComponent,
    ItDepartmentDirectorTaskListComponent,
    TaskActionItDirectorComponent,
    TaskActionHrComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    ChartModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MatButtonModule,
    MatDividerModule,
    TableModule,
    FormsModule,
    RatingModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,


    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps:[HttpClient]
      }
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5001"],
        disallowedRoutes: []
      }
    }),




  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
