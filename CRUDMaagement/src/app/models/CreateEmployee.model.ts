import { Employee } from 'src/app/models/employee.model';
import { Department } from './deprtment.model';
export interface CreateEmployee{
  id:number,
  requestEmployeeId:number,
  salary:number,
  Email:string,
  userName:string,
  insuranceNumber:string,
  joiningDate:Date,
  departmeentID:number,
  subUnitID:number,

}
