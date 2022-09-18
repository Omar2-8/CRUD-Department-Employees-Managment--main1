import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatedResponse, LoginUser } from 'src/app/models/Accounts.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin!: boolean;
  roleId!:string;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  loginUser:LoginUser={
    email: '',
    password: ''
  }



  constructor(private loginuser:AccountsService,private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    debugger
    if (!this.loginForm.valid) {
      return;
    }
    else{
      this.loginUser.email=this.loginForm.value.email as string;
      this.loginUser.password=this.loginForm.value.password as string;

      this.loginuser.LoginUser(this.loginUser).subscribe({
        next:(response:AuthenticatedResponse)=>{
           
          const token = response.token;
          localStorage.setItem("jwt", token); 
          this.invalidLogin = false; 
          this.roleId=JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["role"];
          if(this.roleId=="Admin")
          this.router.navigate(['dashboard']);
          else
          this.router.navigate(['page']);
        },
        error:(er: any)=>{
          this.invalidLogin=true;
          console.log(er);
          
        }
      })
    }
  }
}
