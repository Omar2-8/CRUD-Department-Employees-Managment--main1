import { EmployyesService } from './../../services/employyes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails:Employee={
    id: 0,
    employeeName: '',
    employeeEmail: '',
    salary: 0,
    departmentEmployeeId: 0,
    img: '',
    cv: '',
    subUnitId: 0
  }
  constructor(private route:ActivatedRoute,private empService:EmployyesService,private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');

        if(id){
          this.empService.getEmployee(id).subscribe({
            next:(res)=>{
              this.employeeDetails=res;
            }
          })
        }

      }
    })
  }
  updateEmployee(){

    this.empService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next:(res)=>{
        this.router.navigate(['employees']);
      }
    })
  }
}
