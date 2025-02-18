import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../core/servies4/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [RouterLink , RouterLinkActive ,CommonModule],
  templateUrl: './nav-main.component.html',
  styleUrl: './nav-main.component.css'
})
export class NavMainComponent implements OnInit , OnDestroy{
  constructor(private _Router:Router ,private _CartService:CartService){}
  isMenuOpen = false;
  cartcount:number=0

  subID!:Subscription

ngOnInit(): void {

  this._CartService.getUserCarts().subscribe({
    next:(res)=>{
      this.cartcount=res.numOfCartItems
    }
  })





  this.subID =  this._CartService.cartcount.subscribe({
    next:(value)=>{console.log(value);
      this.cartcount=value
    }
  })
}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout():void{
    // sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    
      this._Router.navigate(['login'])
    
  }

  ngOnDestroy(): void {
    this.subID?.unsubscribe()
  }
}
