import { Department } from './../models/deprtment.model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { DepartmentsDTO } from '../models/departmentsDTO.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
baseApiUrl:string = environment.baseApiUrl;
headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' 
 });
  constructor(private http:HttpClient) { }


  getAllDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.baseApiUrl +'/api/Departments/GetDepartmentList');
  }
  getEmployeeInDepartmentsCount():Observable<DepartmentsDTO[]>{
    return this.http.get<DepartmentsDTO[]>(this.baseApiUrl+'/api/DashBoard');
  }

  addDepartment(addDepartmentReq:Department):Observable<Department>{
    addDepartmentReq.id=0;
    return this.http.post<Department>(this.baseApiUrl +'/api/Departments/AddDepartment',addDepartmentReq);
  }

  getDepartment(id:string):Observable<Department>{
    return this.http.get<Department>(this.baseApiUrl +'/api/Departments/GetDepartmentById?id=' + id);
  }

  updateDepartment(id:number,updateDepartmentreq:Department):Observable<Department>{
    return this.http.post<Department>(this.baseApiUrl +'/api/Departments/UpdateDepartment?id=' + id,updateDepartmentreq)
  }
  deleteDepartment(id:number):Observable<Department>{
    return this.http.delete<Department>(this.baseApiUrl +'/api/Departments/DeleteDepartment?id=' + id);
  }
}
