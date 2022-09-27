import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateEmployee } from 'src/app/models/CreateEmployee.model';
import { Tasks } from 'src/app/models/Task.model';
import { DataService } from 'src/app/services/data.service';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';

@Component({
  selector: 'app-task-action-finance',
  templateUrl: './task-action-finance.component.html',
  styleUrls: ['./task-action-finance.component.css']
})
export class TaskActionFinanceComponent implements OnInit {


  constructor(private route:ActivatedRoute,private workflowService:WorkflowService,private data:DataService,private router:Router) { }

   reqForm=new FormGroup({
    comments:new FormControl(null,Validators.required),
  })

  isRejected: boolean = false;

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

   accept(){
    this.data.currentUserId.subscribe(x=> this.createEmployee.RequestEmployeeId  = x);
     this.workflowService.financeApprove(this.createEmployee).subscribe({
        next:()=>{
          this.router.navigate(['page']);
        },
        error:(er: any)=>{
          console.log(er);

        }
      })

  }
  reject(){
    this.task.Comments=this.reqForm.value.comments as unknown as string ;
     this.data.currentUserId.subscribe(x=> this.task.TaskEmployeeId = x);
    this.workflowService.rejectRequest(this.task).subscribe({
        next:()=>{
          this.router.navigate(['page']);
        },
        error:(er: any)=>{
          console.log(er);
        }
      })
  }

}
