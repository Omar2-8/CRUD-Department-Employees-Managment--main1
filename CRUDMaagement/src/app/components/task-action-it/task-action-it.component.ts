import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateEmployee } from 'src/app/models/CreateEmployee.model';
import { Tasks } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';

@Component({
  selector: 'app-task-action-it',
  templateUrl: './task-action-it.component.html',
  styleUrls: ['./task-action-it.component.css']
})
export class TaskActionItComponent implements OnInit {

  isShown: boolean = false;
  submitted= false;
  constructor(private route:ActivatedRoute,private workflowService:WorkflowService,private page:SidenaveComponent) { }

   regForm=new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
  })



   task:Tasks={
    id: 0,
    action: '',
    comments: '',
    status: 0,
    TaskEmployeeId: 0
  }

  createEmployee:CreateEmployee={
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
ngOnInit(): void {
   this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');

        if(id){
          this.workflowService.getCreateEmployee(id).subscribe({
            next:(res)=>{
              this.createEmployee=res;
            }
          })
          this.workflowService.getTask(id).subscribe({
            next:(res)=>{
              this.task=res;
            }
          })
        }

      }
    })
  }

  createEmail(){
    debugger
    this.createEmployee.Email=this.regForm.value.Email as unknown as string;
    this.workflowService.createEmail(this.createEmployee).subscribe({
      next:(res)=>{

      }

    })


  }

}
