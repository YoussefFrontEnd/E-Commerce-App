import { NgClass } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgClass , FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnDestroy{
   regitsersub!:Subscription
 constructor(private _AuthService:AuthService ,private _Router:Router){}

  resmessage!:string
  loading:boolean=false
registerform:FormGroup= new FormGroup({
  name:new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required , Validators.pattern(/^\w{6}$/)]),
  rePassword:new FormControl(null),
  phone:new FormControl(null , [Validators.required , Validators.pattern(/^01[0,1 , 2 , 5][0-9]{8}$/)] )
} ,this.confirmpassword )


confirmpassword(g:AbstractControl){
if(g.get('password')?.value === g.get('rePassword')?.value){
  return null;

}
else{
  return{missmatch:true}
}


}

registeruser(){
  if(this.registerform.valid){
    this.loading=true
    console.log(this.registerform);
    this.regitsersub = this._AuthService.registeruser(this.registerform.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.resmessage =res.message;
        this.loading=false

        
         setInterval(()=>{
          this._Router.navigate(['/auth/login'])
         }, 2000)

        

      },
      error:(error)=>{console.log(error.error.message)
        this.resmessage = error.error.message;
        this.loading=false
      }
    })
  }
  else{
    this.registerform.setErrors({'missmatch':true})
    this.registerform.markAllAsTouched()
  }
  
}
ngOnDestroy(): void {
  this.regitsersub?.unsubscribe()
}


}
