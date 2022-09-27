import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks,RequestForm } from 'src/app/models/Task.model';
import { DataService } from 'src/app/services/data.service';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';
@Component({
  selector: 'app-task-action-it-director',
  templateUrl: './task-action-it-director.component.html',
  styleUrls: ['./task-action-it-director.component.css']
})
export class TaskActionItDirectorComponent implements OnInit {

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

  registerReq:RequestForm={
    ReuqusterId: 0,
    employeeJob: '',
    employeeExperince: '',
    comments: '',
    SubUnitRequestId: 0
  }


  constructor(private route:ActivatedRoute,private workflowService:WorkflowService, private data:DataService,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');

        if(id){
          this.workflowService.getEmployeeRequest(id).subscribe({
            next:(res)=>{
              this.registerReq=res;
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
    console.log(this.registerReq);

  }

  accept(){
    this.data.currentUserId.subscribe(x=> this.registerReq.ReuqusterId  = x);

     this.workflowService.createNewEmployeeRequest(this.registerReq).subscribe({
        next:()=>{ this.router.navigate(['page']);
        },
        error:(er: any)=>{
          console.log(er);

        }
      })

  }
  reject(){
    this.task.Comments=this.reqForm.value.comments as unknown as string ;
    this.data.currentUserId.subscribe(x=> this.task.TaskEmployeeId  = x);

    this.workflowService.rejectRequest(this.task).subscribe({
        next:()=>{ this.router.navigate(['page']);
        },
        error:(er: any)=>{
          console.log(er);
        }
      })
  }


  }


