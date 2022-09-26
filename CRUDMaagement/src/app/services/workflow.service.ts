import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateEmployee } from '../models/CreateEmployee.model';
import { RequestForm, Tasks } from '../models/Task.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {


baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }


  RegiterReq(registerReq:RequestForm):Observable<RequestForm>{
  return  this.http.post<RequestForm>(this.baseApiUrl+'/api/WorkFlow/addEmployeeRequest',registerReq);
  }
  getEmployeeRequest(id:string):Observable<RequestForm>{
  return  this.http.get<RequestForm>(this.baseApiUrl+'/api/WorkFlow/getEmployeeRequest?id='+id);
  }

   getTasks():Observable<Tasks[]>{
  return  this.http.get<Tasks[]>(this.baseApiUrl+'/api/WorkFlow/GetTasks');
  }
  getHRTasks():Observable<Tasks[]>{
  return  this.http.get<Tasks[]>(this.baseApiUrl+'/api/WorkFlow/GetHRTasks');
  }
   getHrManagerTasks():Observable<Tasks[]>{
  return  this.http.get<Tasks[]>(this.baseApiUrl+'/api/WorkFlow/GetHrManagerTasks');
  }
   getITTasks():Observable<Tasks[]>{
  return  this.http.get<Tasks[]>(this.baseApiUrl+'/api/WorkFlow/GetITTasks');
  }
   getFinanceTasks():Observable<Tasks[]>{
  return  this.http.get<Tasks[]>(this.baseApiUrl+'/api/WorkFlow/GetFinanceTasks');
  }
   getTask(id:string):Observable<Tasks >{
  return  this.http.get<Tasks >(this.baseApiUrl+'/api/WorkFlow/getTask?id='+id);
  }
  createNewEmployeeRequest(registerReq:RequestForm):Observable<RequestForm>{
  return  this.http.post<RequestForm>(this.baseApiUrl+'/api/WorkFlow/createNewEmployeeRequest',registerReq);
  }
  getCreateEmployee(id:string):Observable<CreateEmployee >{
  return  this.http.get<CreateEmployee >(this.baseApiUrl+'/api/WorkFlow/getCreateEmployee?id='+id);
  }
  rejectRequest(task:Tasks):Observable<Tasks>{
  return  this.http.post<Tasks>(this.baseApiUrl+'/api/WorkFlow/rejectRequest',task);
  }
  createEmployee(createEmployee:CreateEmployee):Observable<CreateEmployee>{
  return  this.http.post<CreateEmployee>(this.baseApiUrl+'/api/WorkFlow/createEmployee',createEmployee);
  }
  hrManagerApprove(createEmployee:CreateEmployee):Observable<CreateEmployee>{
  return  this.http.post<CreateEmployee>(this.baseApiUrl+'/api/WorkFlow/hrManagerApprove',createEmployee);
  }
  financeApprove(createEmployee:CreateEmployee):Observable<CreateEmployee>{
  return  this.http.post<CreateEmployee>(this.baseApiUrl+'/api/WorkFlow/financeApprove',createEmployee);
  }
  createEmail(createEmployee:CreateEmployee):Observable<CreateEmployee>{
  return  this.http.post<CreateEmployee>(this.baseApiUrl+'/api/WorkFlow/createEmail',createEmployee);
  }

}
