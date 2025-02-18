import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule , Validators} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule  ,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit , OnDestroy{
  loginsub!:Subscription
  intervalid!:any
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  ngOnInit(): void {
    this.login()
  }
  
    resmessage!:string
    loading:boolean=false
  loginUser:FormGroup= new FormGroup({
    
    email:new FormControl(null , [Validators.required , Validators.email]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^\w{6}$/)]),
    
  }  )
  
  

  
login(){
    if(this.loginUser.valid){
      this.loading=true
      console.log(this.loginUser);
      this.loginsub =  this._AuthService.loginuser(this.loginUser.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.resmessage =res.message;
          this.loading=false

           localStorage.setItem('token',res.token)


          // sessionStorage.setItem('token',res.token)
          this._AuthService.saveduser()
  
          
         this.intervalid = setInterval(()=>{
            this._Router.navigate(['/home'])

          }, 2000)
  
          
  
        },
        error:(error)=>{console.log(error.error.message)
          this.resmessage = error.error.message;
          this.loading=false
        }
      })
    }
   
    
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalid)
    this.loginsub?.unsubscribe()
  }
  

}
