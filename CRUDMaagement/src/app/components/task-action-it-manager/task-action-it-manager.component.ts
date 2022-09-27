import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestForm } from 'src/app/models/Task.model';
import { DataService } from 'src/app/services/data.service';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';

@Component({
  selector: 'app-task-action-it-manager',
  templateUrl: './task-action-it-manager.component.html',
  styleUrls: ['./task-action-it-manager.component.css']
})
export class TaskActionItManagerComponent implements OnInit {

  constructor(private workflowService:WorkflowService,private data:DataService,private router:Router) { }
  isShown: boolean = false;

  reqForm=new FormGroup({
    employeeJob:new FormControl(null,Validators.required),
    employeeExperience:new FormControl(null,Validators.required),
    comments:new FormControl(null)
  })

  newEmplloyeeRequest:RequestForm={
    employeeJob: '',
    employeeExperince: '',
    SubUnitRequestId: 0,
    comments: '',
    ReuqusterId: 0
  }

  request(){
    if (!this.reqForm.valid) {
      return;
    }
    debugger
    this.newEmplloyeeRequest.employeeJob=this.reqForm.value.employeeJob as unknown as string ;
    this.newEmplloyeeRequest.employeeExperince=this.reqForm.value.employeeExperience as unknown as string ;
    this.newEmplloyeeRequest.comments=this.reqForm.value.comments as unknown as string ;

    this.workflowService.RegiterReq(this.newEmplloyeeRequest).subscribe({
        next:()=>{
          this.router.navigate(['page']);

        },
        error:(er: any)=>{
          console.log(er);

        }
      })
  }
  ngOnInit(): void {
    this.data.currentUserId.subscribe(x=> this.newEmplloyeeRequest.ReuqusterId = x);
    this.data.currentSubUnitId.subscribe(x=> this.newEmplloyeeRequest.SubUnitRequestId  = x);
  }


}
