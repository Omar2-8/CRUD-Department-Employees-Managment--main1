import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegiterUser } from 'src/app/models/Accounts.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },)

  registerUser:RegiterUser={
    email: '',
    userName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  }
  
  constructor(private registeruser:AccountsService,private router:Router){}


  ngOnInit(): void {
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    else{
      this.registerUser.email=this.registerForm.value.email as unknown as string;
      this.registerUser.userName=this.registerForm.value.username as unknown as string;
      this.registerUser.phoneNumber=this.registerForm.value.phoneNumber as unknown as string;
      this.registerUser.password=this.registerForm.value.password as unknown as string;
      this.registerUser.confirmPassword=this.registerForm.value.passwordConfirm as unknown as string;

      this.registeruser.RegiterUser(this.registerUser).subscribe({
        next:()=>{
          this.router.navigate(['dashboard'])

        },
        error:(er)=>{
          console.log(er);
          
        }
      })
    }
  
  }

}
