import { Router } from '@angular/router';
import { Employee } from './../../models/employee.model';
import { EmployyesService } from './../../services/employyes.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/services/department.service';
import { Department } from 'src/app/models/deprtment.model';

@Component({
  selector: 'app-emoployees-list',
  templateUrl: './emoployees-list.component.html',
  styleUrls: ['./emoployees-list.component.css']
})
export class EmoployeesListComponent implements OnInit {


  employees:Employee[]=[];
  departments:Department[]=[];
  constructor(private employyesService:EmployyesService ,private departmentsService:DepartmentsService) { }

  ngOnInit(): void {
      
    this.employyesService.getAllEmployees()
    .subscribe({
      next:(emp)=>{
        this.employees=emp;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  

  this.departmentsService.getAllDepartments()
    .subscribe({
      next:(departments)=>{
        this.departments=departments;
        console.log(this.departments);
      },
      error:(er)=>{
        console.log(er);
      }
    })
  }

  deleteEmployee(id:number){
    this.employyesService.deleteEmployee(id)
    .subscribe({
      next:(res)=>{
        window.location.reload();
      }
    })

  }

  findDepartment(depId:number):string{
    for(var i=0;i<this.departments.length;i++)
    if(depId==this.departments[i].id)
    return this.departments[i].departmentName

    return "unk"
  }


}