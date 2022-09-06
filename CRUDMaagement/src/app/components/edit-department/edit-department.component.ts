import { DepartmentsService } from 'src/app/services/department.service';
import { Department } from './../../models/deprtment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  departmentDetails:Department={
    id: 0,
    departmentName: ''
  }
  constructor(private route:ActivatedRoute,private depService:DepartmentsService,private router : Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param)=>{
        const id = param.get('id');

        if(id){
          this.depService.getDepartment(id).subscribe({
            next:(res)=>{
              this.departmentDetails=res;
            }
          })
        }

      }
    })

  }
  updateDepartment(){
    this.depService.updateDepartment(this.departmentDetails.id,this.departmentDetails)
    .subscribe({
      next:(res)=>{
        this.router.navigate(['departments']);
      }
    })
  }

}
