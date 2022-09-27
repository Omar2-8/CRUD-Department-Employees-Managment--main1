import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route:ActivatedRoute,private workflowService:WorkflowService,private page:SidenaveComponent,private router:Router) { }

   regForm=new FormGroup({
    Email:new FormControl('',[Validators.required,Validators.email]),
  })



   task:Tasks={
    id: 0,
    action: '',
    Comments: '',
    Status: 0,
    TaskEmployeeId: 0
  }

  createEmployee:CreateEmployee={
    id: 0,
    RequestEmployeeId: 0,
    salary: 0,
    email: '',
    userName: '',
    insuranceNumber: '',
    joiningDate: new Date,
    
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
    this.createEmployee.email=this.regForm.value.Email as unknown as string;
    this.workflowService.createEmail(this.createEmployee).subscribe({
      next:(res)=>{
        this.router.navigate(['page']);

      }

    })


  }

}
