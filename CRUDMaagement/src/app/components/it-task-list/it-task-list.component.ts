import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';

@Component({
  selector: 'app-it-task-list',
  templateUrl: './it-task-list.component.html',
  styleUrls: ['./it-task-list.component.css']
})
export class ItTaskListComponent implements OnInit {

  tasks:Tasks[]=[];
  constructor(private workflowService:WorkflowService) { }

  ngOnInit(): void {
     this.workflowService.getITTasks().subscribe({
      next:(t)=>{
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
