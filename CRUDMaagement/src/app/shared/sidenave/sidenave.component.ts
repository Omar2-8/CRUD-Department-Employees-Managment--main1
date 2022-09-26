import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { DataService } from 'src/app/services/data.service';
import { EmployyesService } from 'src/app/services/employyes.service';

@Component({
  selector: 'app-sidenave',
  templateUrl: './sidenave.component.html',
  styleUrls: ['./sidenave.component.scss']
})
export class SidenaveComponent implements OnInit {

  role!: string ;
  token! :string | null ;
  email!: string ;


  employeeDetails: Employee = {
    id: 0,
    employeeName: '',
    employeeEmail: '',
    salary: 0,
    departmentEmployeeId: 0,
    img: '',
    cv: '',
    subUnitId: 0
  }


  constructor(private router:Router,private employyesService: EmployyesService,private data:DataService) { }

  public getTheId(){
    return this.employeeDetails.id;
  }


  ngOnInit(): void {
debugger
    this.token=localStorage.getItem("jwt") ;
    this.email = JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["email"];
    this.role = JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["role"];
   // console.log(this.role)

  this.employyesService.getEmployeeByEmail(this.email ).subscribe({
      next: (employee) => {
debugger

        this.employeeDetails = employee;
        this.data.setUserId(employee.id);
  this.data.setsubUnitId(employee.subUnitId);
      },
      error:(er)=>{
        console.log(er);

      }
    });


    console.log(this.employeeDetails);


  }

  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(['login']);
  }

}
