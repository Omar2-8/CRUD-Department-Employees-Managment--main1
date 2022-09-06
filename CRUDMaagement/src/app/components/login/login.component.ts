import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/Accounts.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
        next:()=>{
          this.router.navigate(['dashboard'])

        },
        error:(er: any)=>{
          console.log(er);
          
        }
      })
    }
  }
}
