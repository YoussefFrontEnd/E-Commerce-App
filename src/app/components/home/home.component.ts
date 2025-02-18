import { CategoriesComponent } from './../categories/categories.component';
import { Iproduct, Category } from './../../core/interface/iproduct';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProudctsService } from '../../core/servises2/proudcts.service';
import { userInfo } from 'os';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../core/servies3/categories.service';
import { Icategories } from '../../core/interface/icategories';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../core/pipes/search.pipe';
import {  FormsModule } from '@angular/forms';
import { CurrencyPipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { MypipePipe } from '../../core/pipes/mypipe.pipe';
import { CartService } from '../../core/servies4/cart.service';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule , RouterLink , SearchPipe ,FormsModule ,UpperCasePipe ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,OnDestroy{
[x: string]: any;

  constructor(private _ProudctsService:ProudctsService , private _CategoriesService:CategoriesService , private _CartService:CartService,private _ToastrService:ToastrService , private _NgxSpinnerService:NgxSpinnerService){}
  productData!:Iproduct[];
  productsub!:Subscription;
  catData!:Icategories[];
  catsub!:Subscription
  searchinput:string =''
  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:2000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1100: {
        items: 6
      },
    },
    nav: true
  }



  mainslider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay:true,
    autoplayTimeout:4000,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
  
    nav: true
  }



  getProduct():void{
    this.productsub= this._ProudctsService.getallproducts().subscribe({
      next:(res)=>
        {
        
        console.log(res.data.slice(0,20))
        this.productData= res.data.slice(0,20)


        
      },
      
    })


    this.catsub = this._CategoriesService.getallCategories().subscribe({
      next:(res)=>{console.log(res.data)
        this.catData =res.data
      },
    
    })
  }




  ngOnInit(): void {

    
  this.getProduct()


  }
ngOnDestroy(): void {
  this.productsub?.unsubscribe()
  this.catsub?.unsubscribe()
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
