import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { read } from 'fs';
import { Observable } from 'rxjs';
import { SignUp } from '../interface/sign-up';
import { Login } from '../interface/login';
import { environment } from '../environment/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
  decodeduser:any

  registeruser(userdata:SignUp):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup ` , userdata)
  }

  loginuser(Data:Login):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin` ,Data)
  }

  saveduser():void{
    if(sessionStorage.getItem('token') !=null){
      this.decodeduser=jwtDecode(sessionStorage.getItem('token')!)
      console.log(this.decodeduser.role);
      

    }



    // if(localStorage.getItem('token') !=null){
    //   this.decodeduser=jwtDecode(localStorage.getItem('token')!)
    //   console.log(this.decodeduser.role);
      

    // }
  }
}
