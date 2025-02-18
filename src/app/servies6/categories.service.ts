import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../core/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }
  getallcategrios():Observable<any>
  {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories`)
  }
  getCategoriesId(id:string):Observable<any>
  {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/categories/`+id )
  }
}
