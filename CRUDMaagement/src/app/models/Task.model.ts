import { Employee } from './employee.model';
import { NumberValueAccessor } from "@angular/forms";

export interface Tasks{
  id:number,
  action:string,
  Comments:string,
  Status:number,
  TaskEmployeeId:number
}
export interface RequestForm{
  ReuqusterId:number,
  employeeJob:string,
  employeeExperince:string,
  comments:string,
  SubUnitRequestId:number,
}
