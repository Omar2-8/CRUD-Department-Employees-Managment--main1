import { CreateEmployee } from './../../models/CreateEmployee.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-task-action-hr',
  templateUrl: './task-action-hr.component.html',
  styleUrls: ['./task-action-hr.component.css']
})
export class TaskActionHrComponent implements OnInit {



  constructor(private workflowService:WorkflowService, private data:DataService) { }
   submitted= false;
addEmployeeReq:CreateEmployee={
  id: 0,
  requestEmployeeId: 0,
  salary: 0,
  Email: '',
  userName: '',
  insuranceNumber: '',
  joiningDate: new Date,
  departmeentID: 0,
  subUnitID: 0,

}
regForm=new FormGroup({
    userName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    salary:new FormControl('',Validators.required),
    insuranceNumber:new FormControl('',Validators.required),
    joiningDate:new FormControl('',Validators.required),
    SubUnitID:new FormControl('',Validators.required),
    DepartmentID:new FormControl('',Validators.required),

  })
  ngOnInit(): void {
  }
  onSubmit(){
    debugger
    this.addEmployeeReq.userName=this.regForm.value.userName as string;
    this.addEmployeeReq.salary=this.regForm.value.salary as unknown as number;
    this.addEmployeeReq.Email=this.regForm.value.email as string;
    this.addEmployeeReq.insuranceNumber= this.regForm.value.insuranceNumber  as unknown as string ;
    this.addEmployeeReq.joiningDate= this.regForm.value.joiningDate as unknown as  Date ;
    this.addEmployeeReq.subUnitID= this.regForm.value.SubUnitID as unknown as  number ;
    this.addEmployeeReq.departmeentID= this.regForm.value.DepartmentID as unknown as  number ;


    this.data.currentUserId.subscribe(x=>  this.addEmployeeReq.requestEmployeeId = x);
    //this.data.currentSubUnitId.subscribe(x=> this.addEmployeeReq.SubUnit  = x as unknown as string);

    this.workflowService.createEmployee(this.addEmployeeReq).subscribe({
       next:()=>{
        },
        error:(er: any)=>{
          console.log(er);
        }
    })
  }

}
