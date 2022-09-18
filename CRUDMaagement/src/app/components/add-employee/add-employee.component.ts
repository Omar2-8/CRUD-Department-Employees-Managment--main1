import { AbstractControl, FormControl, FormGroup, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { EmployyesService } from './../../services/employyes.service';
import { Employee } from './../../models/employee.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Department } from 'src/app/models/deprtment.model';
import { DepartmentsService } from 'src/app/services/department.service';
import { NgModule} from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'] 
})
export class AddEmployeeComponent implements OnInit {
  
  isBusy!:boolean;
  messageValidate={
    employeeEmail:{
      matchEmployeeEmail:'',
    }
  }

  regForm=new FormGroup({
    EmployeeName:new FormControl('',Validators.required),
    EmployeeEmail:new FormControl('',[Validators.required,Validators.email]),
    EmployeeSalary:new FormControl('',Validators.required),
    Departmentid:new FormControl('',Validators.required),
    
  })

  addEmployeeReq:Employee={
    id: 0,
    employeeName: '',
    employeeEmail: '',
    salary: 0,
    departmentEmployeeId: 0,
    img: '',
    cv: ''
  }
  @ViewChild('teams') teams!: ElementRef;
  departments:Department[]=[];
  submitted= false;
  constructor(
    private employyesService:EmployyesService,
    private departmentService:DepartmentsService,
    private router:Router) { }

  ngOnInit(): void {
    this.isBusy=false;
    this.getDepartments();

    this.regForm.valueChanges.subscribe(x=>{
      if(this.regForm.status=='VALID'){
        console.log('form valid'); 

        this.isBusy=false;
      }
    },er=>console.log(er)
    )

  }
  addEmployee(){
    this.addEmployeeReq.employeeName=this.regForm.value.EmployeeName as string;
    this.addEmployeeReq.employeeEmail=this.regForm.value.EmployeeEmail as string;
    this.addEmployeeReq.salary= this.regForm.value.EmployeeSalary  as unknown as number ;
    this.addEmployeeReq.departmentEmployeeId=+(this.regForm.value.Departmentid as string);

    this.employyesService.addEmployee(this.addEmployeeReq)
    .subscribe({
      next:(employee)=>{
        this.router.navigate(['employees'])
      },
      error:(er)=>{
        console.log(er);

      }
    });

    


  }
  getDepartments(){
this.departmentService.getAllDepartments()
    .subscribe({
      next:(departments)=>{
        this.departments=departments;

      },
      error:(er)=>{
        console.log(this.addEmployeeReq);
      }
    })
  }

    onSubmit(){
    this.submitted=true;
    //this.isBusy=false;
    if(this.regForm.invalid){
      return;
    }else{
      this.addEmployee();
    }
  }
  mm=false;
   message='This Email already Exist! Try another one';


 
  // isEmailExists(){
  //   const email=this.regForm.value.EmployeeEmail;
  //   if(email!=null && email!=''&& this.isBusy===false){
  //     this.employyesService.EmailExists(email).subscribe(x=>{
  //       this.mm=true;
  //       this.messageValidate.employeeEmail.matchEmployeeEmail=this.message;
  //       console.log('oldd');


  //     },ex=>this.addEmployee());

  //     return true;
  //   }
  //   console.log("new email");

  //   return false;
  // }


  upload(event:Event){
    console.log(event)
 }
}

