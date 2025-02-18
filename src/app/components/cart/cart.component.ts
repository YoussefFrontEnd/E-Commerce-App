import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/servies4/cart.service';
import { Subscription } from 'rxjs';
import { Icart } from '../../core/interface/icart';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe , RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit , OnDestroy{
constructor(private _CartService:CartService){}
cartData:Icart |null = null
cartsub!:Subscription

ngOnInit(): void {
   this.cartsub = this._CartService.getUserCarts().subscribe({
    next:(res)=>{console.log(res.data
    )
      this.cartData=res.data

    },
    error:(err)=>{console.log(err);
    }
  })
}

ngOnDestroy(): void {
  this.cartsub?.unsubscribe()
}

removeitem(productId:string):void{
  this._CartService.deleteItem(productId).subscribe({
    next:(res)=>{console.log(res)
      this._CartService.cartcount.next(res.numOfCartItems)
      this.cartData=res.data
    },
    error:(err)=>{console.log(err);
    }
  })
}
 
updatequant(productId:string , count:number):void{
if(count > 0){
  this._CartService.updateCarts(productId , count).subscribe({
    next:(res)=>{console.log(res);
      this.cartData=res.data


    },
    error:(err)=>{console.log(err);
    }

  })
}
}
}
