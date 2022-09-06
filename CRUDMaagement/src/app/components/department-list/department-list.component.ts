import { DepartmentsService } from './../../services/department.service';
import { Department } from './../../models/deprtment.model';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  
  
  departments:Department[]=[];
  displayedColumns: string[] = ['id', 'departmentName','editDeapartment','deleteDepartment'];
  dataSource = new MatTableDataSource<Department>;
  
  
  constructor(private departmentsService:DepartmentsService) { }

  ngOnInit(): void {

    this.departmentsService.getAllDepartments()
    .subscribe(
   {
      next:(departments)=>{
        this.departments=departments;
        this.dataSource = new MatTableDataSource(this.departments);
        console.log(this.departments);
      },
      error:(er)=>{
        console.log(er);
      }
    });
  }

  deleteDepartment(id:number){
    this.departmentsService.deleteDepartment(id)
    .subscribe({
      next:(res)=>{
        window.location.reload();
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}