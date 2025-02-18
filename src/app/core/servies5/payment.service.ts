import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _HttpClient:HttpClient) { }
  cilenttoken:any={token:localStorage.getItem('token')}

  Checkoutsession(cardId:string|null ,shipingdata:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/orders/checkout-session/${cardId}?url=${environment.url}`,
      {"shipingaddress": shipingdata},
      {headers:this.cilenttoken}
      
    )
  }
}
