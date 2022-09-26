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
  actor!:string;
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
          this.actor=JSON.parse(window.atob(localStorage.getItem("jwt")!.split('.')[1]))["actort"];

          if(this.roleId=="Admin")
          this.router.navigate(['dashboard']);

          else if(this.roleId=="Employee"){
            if(this.actor=="IT")
          this.router.navigate(['company/itlist']);

            else if(this.actor=="HR")
          this.router.navigate(['company/hrlist']);

            else if(this.actor=="Finance")
          this.router.navigate(['company/financelist']);
          }
          else if(this.roleId=="Manager"){

            if(this.actor=="IT")
          this.router.navigate(['company/itmanager']);

            else if(this.actor=="HR")
          this.router.navigate(['company/hrmanagerlist']);

          //   else if(this.actor=="Finance")
          // this.router.navigate(['financelist']);

          }
          else if(this.roleId=="Director"){
          this.router.navigate(['company/itdirectorlist']);
          }

        },
        error:(er: any)=>{
          this.invalidLogin=true;
          console.log(er);

        }
      })
    }
  }
}
