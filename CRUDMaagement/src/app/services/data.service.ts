import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  private  userId = new BehaviorSubject<number>(1);
  private  subUnitId = new BehaviorSubject<number>(1);

  currentUserId=this.userId.asObservable();
  currentSubUnitId=this.subUnitId.asObservable();


  constructor() { }
  ngOnInit(): void {

  }
  setUserId(id:number){
    this.userId.next(id);
  }

  setsubUnitId(id:number){
    this.subUnitId.next(id);
  }

  // gettUserId(){
  //   return this.userId.value;
  // }

  // getsubUnitId(){
  //   return this.subUnitId.value;
  // }

}
