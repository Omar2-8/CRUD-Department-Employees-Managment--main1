import { DepartmentsService } from './../../services/department.service';
import { Department } from './../../models/deprtment.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  submitted=false;
  regForm=new FormGroup({
    DepartmentName:new FormControl('',Validators.required)
  })

  addDepartmentReq:Department={
    id:0,
    departmentName:'',
  }

  constructor(private departmentService:DepartmentsService,private router:Router,formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  addDepartment(){
    this.addDepartmentReq.departmentName=this.regForm.value.DepartmentName as string;
    this.departmentService.addDepartment(this.addDepartmentReq)
    .subscribe({
      next:(department)=>{
        this.router.navigate(['departments'])
      },
      error:(er)=>{
        console.log(er);

      }
    })

  }
  onSubmit(){
    this.submitted=true;
    if(this.regForm.invalid){
      return;
    }else{
      this.addDepartment();
    }
  }




}
