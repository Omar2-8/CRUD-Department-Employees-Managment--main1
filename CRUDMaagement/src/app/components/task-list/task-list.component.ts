import { WorkflowService } from './../../services/workflow.service';
import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/Task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Tasks[]=[];

  constructor(private WorkflowService:WorkflowService) { }

  ngOnInit(): void {
    this.WorkflowService.getTasks().subscribe({
      next:(t)=>{
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
