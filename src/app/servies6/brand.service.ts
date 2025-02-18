import { Injectable } from '@angular/core';
import { environment } from '../core/environment/environment';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
constructor(private _HttpClient:HttpClient){}

getAllBrands():Observable<any>{
  return this._HttpClient.get(environment.baseUrl + '/api/v1/brands')
}

getBrandsId(id:string):Observable<any>{
  return this._HttpClient.get(environment.baseUrl + '/api/v1/brands/'+id)
}
    
}
