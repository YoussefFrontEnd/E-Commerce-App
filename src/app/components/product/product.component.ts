import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { UpperCasePipe } from '@angular/common';
import { Iproduct } from '../../core/interface/iproduct';
import { ProductService } from '../../servies6/product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/servies4/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink , SearchPipe ,FormsModule ,UpperCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  private _ToastrService: any;
  constructor(private _ProductService:ProductService , private _CartService:CartService){}
productData!:Iproduct[]
productsub !:Subscription
catsub!:Subscription
searchinput:string =''

getProduct():void{
  this.productsub= this._ProductService.getallproduct().subscribe({
    next:(res)=>
      {
      
      console.log(res.data.slice(0,20))
      this.productData= res.data.slice(0,20)


      
    },
    
  })


  this.catsub = this._ProductService.getallproduct().subscribe({
    next:(res)=>{console.log(res.data)
      this.productData =res.data
    },
  
  })
}

ngOnInit(): void {
  this.getProduct()
}



getCart(productId:string) {

  this._CartService.addCarts(productId).subscribe({
    next:(res)=>{console.log(res)

      this._CartService.cartcount.next(res.numOfCartItems)  
      console.log(this._CartService.cartcount);
      
      
      

      this._ToastrService.info(res.message, 'fresh cart' , {timeOut:2000 , closeButton:true})
    },
  
  })

}

}
