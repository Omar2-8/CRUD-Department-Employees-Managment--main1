import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';

@Component({
  selector: 'app-hr-task-list',
  templateUrl: './hr-task-list.component.html',
  styleUrls: ['./hr-task-list.component.css']
})
export class HRTaskListComponent implements OnInit {
 tasks:Tasks[]=[];
  constructor(private workflowService:WorkflowService) { }

  ngOnInit(): void {
     this.workflowService.getHRTasks().subscribe({
      next:(t)=>{
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
