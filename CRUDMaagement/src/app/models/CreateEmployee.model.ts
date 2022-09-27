import { Employee } from 'src/app/models/employee.model';
import { Department } from './deprtment.model';
export interface CreateEmployee{
  id:number,
  RequestEmployeeId:number,
  salary:number,
  email:string,
  userName:string,
  insuranceNumber:string,
  joiningDate:Date,
  subUnitID:number,

}
