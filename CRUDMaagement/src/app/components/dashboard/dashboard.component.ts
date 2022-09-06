import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartmentsDTO } from 'src/app/models/departmentsDTO.model';
import { Department } from 'src/app/models/deprtment.model';
import { DepartmentsService } from 'src/app/services/department.service';
import { EmployyesService } from 'src/app/services/employyes.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  basicData: any;
  basicOptions:any;
  chartOptions: any;

  depNames:String[] = [];
  depCount:number[] = [];
  subscription: Subscription | undefined;
  departments:DepartmentsDTO[]=[];
  constructor(private departmentsService:DepartmentsService,private employeeService:EmployyesService) { }

  ngOnInit(){
    this.departmentsService.getEmployeeInDepartmentsCount()
    .subscribe({
      next:(departments)=>{
        this.departments=departments;
    this.departmentNames()
      },
      error:(er)=>{
        console.log(er);
      }
    })
    
 }

departmentNames(){
  this.departments.forEach(element => {
    
    this.depNames.push(element.departmentName);
    this.depCount.push(element.employeeCount);
     console.log(this.depNames);
     console.log(this.depCount);
    
    
  });
  this.basicData = {
    labels: this.depNames,
    datasets: [
        {
            label: 'Number of Employees',
            backgroundColor: '#42A5F5',
            data: this.depCount,
        }
       
    ]
}; 
}

DownloadToExcel(){
  this.employeeService.getExcelFile().subscribe(data=>{
    var newBlob = new Blob([data as any], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
debugger
    const dataLink = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = dataLink;
    link.download = "Employees.xlsx";
    link.click();
  })

}


}