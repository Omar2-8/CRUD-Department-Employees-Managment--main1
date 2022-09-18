import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployyesService } from 'src/app/services/employyes.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  

  email=JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];

  employeeDetails:Employee={
    id: 0,
    employeeName: '',
    employeeEmail: '',
    salary: 0,
    departmentEmployeeId: 0,
    img: '',
    cv: ''
  }
  
  constructor(private route:ActivatedRoute,private empService:EmployyesService,private router : Router) { }

  ngOnInit(): void { 

    this.empService.getEmployeeByEmail(this.email).subscribe({
      next:(res)=>{
        this.employeeDetails=res;
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
  uploadimgFile = (files:Event) => {
   
    let fileToUpload = <File><unknown>files;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.empService.uplodeEmployeeImg(this.employeeDetails.id,fileToUpload).subscribe({
        next:(event)=>{
          
        },
        error:(er)=>{
          console.log(er);
          
        }
    })

  }
  uploadCvFile = (files:Event) => {
    
    let fileToUpload = <File><unknown>files;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.empService.uplodeEmployeeCv(this.employeeDetails.id,fileToUpload).subscribe({
        next:(event)=>{
          
        },
        error:(er)=>{
          console.log(er);
          
        }
    })

  }
   

}
