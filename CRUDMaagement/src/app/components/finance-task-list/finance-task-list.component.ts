import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';

@Component({
  selector: 'app-finance-task-list',
  templateUrl: './finance-task-list.component.html',
  styleUrls: ['./finance-task-list.component.css']
})
export class FinanceTaskListComponent implements OnInit {

  tasks:Tasks[]=[];
  constructor(private workflowService:WorkflowService) { }

  ngOnInit(): void {
  this.workflowService.getFinanceTasks().subscribe({
      next:(t)=>{
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
