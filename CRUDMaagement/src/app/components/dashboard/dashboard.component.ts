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
 

  depNames:String[] = [];
  depCount:number[] = [];
  depSalaryCount:number[] = [];
 
  departments:DepartmentsDTO[]=[];


  //pie chart 
  data: any;
  chartOptions: any;
  subscription: Subscription | undefined;

  constructor(private departmentsService:DepartmentsService,private employeeService:EmployyesService) { }

  ngOnInit(){
    this.departmentsService.getEmployeeInDepartmentsCount()
    .subscribe({
      next:(departments)=>{
        this.departments=departments;
    this.departmentNames()
    this.salaryCount();
      },
      error:(er)=>{
        debugger
        console.log(er);
      }
    })


   
    
 }
  salaryCount() {

    this.data = {
      labels: this.depNames,
      datasets: [
          {
              data: this.depSalaryCount,
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  };
  }

departmentNames(){
  this.departments.forEach(element => {
    
    this.depNames.push(element.departmentName);
    this.depCount.push(element.employeeCount);
    this.depSalaryCount.push(element.departmentSalaryCount);

     console.log(this.depNames);
     console.log(this.depCount);
     console.log(this.depSalaryCount);
    
    
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

    const dataLink = window.URL.createObjectURL(newBlob);
    var link = document.createElement('a');
    link.href = dataLink;
    link.download = "Employees.xlsx";
    link.click();
  })
}


}