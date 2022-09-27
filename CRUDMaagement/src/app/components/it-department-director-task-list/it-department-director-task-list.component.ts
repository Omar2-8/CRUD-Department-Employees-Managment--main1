import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tasks,RequestForm } from 'src/app/models/Task.model';
import { WorkflowService } from 'src/app/services/workflow.service';
import { SidenaveComponent } from 'src/app/shared/sidenave/sidenave.component';

@Component({
  selector: 'app-it-department-director-task-list',
  templateUrl: './it-department-director-task-list.component.html',
  styleUrls: ['./it-department-director-task-list.component.css']
})
export class ItDepartmentDirectorTaskListComponent implements OnInit {

  tasks:Tasks[]=[];

  constructor(private WorkflowService:WorkflowService) { }

  ngOnInit(): void {
    this.WorkflowService.getTasks().subscribe({
      next:(t)=>{
        debugger
        this.tasks=t;
      },
      error:(er)=>{
        console.log(er);

      }
    })
  }

}
