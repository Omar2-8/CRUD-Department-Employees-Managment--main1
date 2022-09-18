import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthenticatedResponse, LoginUser, RegiterUser } from '../models/Accounts.model';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  RegiterUser(registerUserReq: RegiterUser): Observable<RegiterUser> {
    //addEmployeeReq.employeeId=0;

    return this.http.post<RegiterUser>(
      this.baseApiUrl + '/api/Accounts/RegisterUser',
      JSON.stringify(registerUserReq),
      {headers:this.headers}
    );
  }


  LoginUser(loginUserReq: LoginUser): Observable<AuthenticatedResponse> {
    return this.http.post<AuthenticatedResponse>(
      this.baseApiUrl + '/api/Accounts/LoginUser',
      JSON.stringify(loginUserReq),
      {headers:this.headers}
    );
  }
}
