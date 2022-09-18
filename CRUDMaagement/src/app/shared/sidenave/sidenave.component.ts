import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
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
    cv: ''
  }

  
  constructor(private router:Router,private employyesService: EmployyesService) { }

  ngOnInit(): void {
    this.employyesService.getEmployeeByEmail(this.email ).subscribe({
      next: (employee) => {
        this.employeeDetails = employee;
      }
    });

    this.token=localStorage.getItem("jwt") ;
     this.email = JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["email"];
     this.role = JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["role"];
   // console.log(this.role)
  }

  logout(){
    localStorage.removeItem("jwt");
    this.router.navigate(['login']);
  }

}
