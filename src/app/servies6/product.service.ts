import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  getallproduct():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/products`)
  }
}
