import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartcount:BehaviorSubject<any>=new BehaviorSubject(0)
  headers={
    token:localStorage.getItem("token")!
  }

  
  constructor(private http:HttpClient) { }


  addCarts(productId:string):Observable<any>{
    return this.http.post(environment.baseUrl + '/api/v1/cart',{productId},{
      headers:{
      ...this.headers
      }
    })
  }

  updateCarts(productId:string , count:number):Observable<any>{
    return this.http.put(environment.baseUrl + '/api/v1/cart/'+ productId ,{count},{
      headers:{
        ...this.headers
      }
    })
  }


  deleteItem(productId:string):Observable<any>{
 return this.http.delete(environment.baseUrl +'/api/v1/cart/'+ productId,{
  headers:{
    ...this.headers
  }
 } )
  }


  clearCarts():Observable<any>{
    return this.http.delete(environment.baseUrl +'/api/v1/cart/',{
     headers:{
       ...this.headers
     }
    } )
     }

     getUserCarts():Observable<any>{
      return this.http.get(environment.baseUrl +'/api/v1/cart/',{
       headers:{
         ...this.headers
       }
      } )
       }
  
}
