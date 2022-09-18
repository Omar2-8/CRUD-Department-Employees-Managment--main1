import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployyesService {
baseApiUrl:string = environment.baseApiUrl;

  constructor(private http:HttpClient) { }


  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl +'/api/Employees/GetEmoloyees');
  }

  addEmployee(addEmployeeReq:Employee):Observable<Employee>{
   //addEmployeeReq.employeeId=0;
    return this.http.post<Employee>(this.baseApiUrl +'/api/Employees/AddEmployee',addEmployeeReq);

  }
  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl +'/api/Employees/GetEmployeesById?id=' + id);
  }
  
  getEmployeeByEmail(email:string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl +'/api/Employees/GetEmployeesByEmail?email=' + email);
  }

  updateEmployee(id:number,updateEmployeereq:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl +'/api/Employees/EditEmoloyee?id='+ id ,updateEmployeereq)
  }

  uplodeEmployeeImg(id:number,file: File):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl +'/api/Employees/uploadimg?id=',file)
  }
  uplodeEmployeeCv(id:number,file: File):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl +'/api/Employees/uploadCv?id=',file)
  }

  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl +'/api/Employees/DeleteEmployee?id=' + id);
  }

  getExcelFile(){
    return this.http.get(this.baseApiUrl+ '/api/ExportToExcel',{headers:new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    }),responseType:'blob'});
  }

  // EmailExists(email:string):Observable<Employee>{
  //   return this.http.get<Employee>(this.baseApiUrl+'/api/Employees/EmailExists?email='+email).pipe();
  // }
}
