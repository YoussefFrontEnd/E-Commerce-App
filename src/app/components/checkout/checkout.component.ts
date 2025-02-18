import { url } from 'inspector';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../core/servies5/payment.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute , private _PaymentService:PaymentService){}
  cartID!:string|null


  shipingaddress:FormGroup = new FormGroup({
    details:new FormControl(null),
      phone:new FormControl(null),
      city:new FormControl(null),
  })

  payorder():void{
    console.log(this.shipingaddress.value);
    this._PaymentService.Checkoutsession(this.cartID ,this.shipingaddress.value ).subscribe({
       next:(res)=>{console.log(res.session.url);
        window.open(res.session.url , '_self')
       }
    })
    
  }
  ngOnInit(): void {
    
    this._ActivatedRoute.paramMap.subscribe({
      next:(param)=>{
        this.cartID = param.get('cart_id')
      }
    })
  }

}
