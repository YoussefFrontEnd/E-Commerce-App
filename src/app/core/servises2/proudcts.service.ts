import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ProudctsService {

  constructor(private _HttpClient:HttpClient) { }

  getallproducts(productid?: string | null):Observable <any>{

    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products` )

  }
  
  productdetails(id:string |null):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products/${id}`)
  }


}
