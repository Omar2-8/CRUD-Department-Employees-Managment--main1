import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';

@Component({
  selector: 'app-hr-manager-task-list',
  templateUrl: './hr-manager-task-list.component.html',
  styleUrls: ['./hr-manager-task-list.component.css']
})
export class HrManagerTaskListComponent implements OnInit {

  tasks:Tasks[]=[];
  constructor(private workflowService:WorkflowService) { }

  ngOnInit(): void {
    this.workflowService.getHrManagerTasks().subscribe({
      next:(t)=>{
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
