import { Employee } from './employee.model';
import { NumberValueAccessor } from "@angular/forms";

export interface Tasks{
  id:number,
  action:string,
  comments:string,
  status:number,
  TaskEmployeeId:number
}
export interface RequestForm{
  ReuqusterId:number,
  employeeJob:string,
  employeeExperince:string,
  comments:string,
  subUnitRequestId:number,
}
