import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudctsService } from '../../core/servises2/proudcts.service';
import { Iproduct } from '../../core/interface/iproduct';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CartService } from '../../core/servies4/cart.service';

@Component({
  selector: 'app-prouductdetails',
  standalone: true,
  imports: [CarouselModule ],
  templateUrl: './prouductdetails.component.html',
  styleUrl: './prouductdetails.component.css'
})
export class ProuductdetailsComponent implements OnInit{

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:1000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProudctsService:ProudctsService , private _CartService:CartService){}
  productid!:string |null
  productdetails:Iproduct |null =null

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{console.log(res.get('p-id'))
        this.productid = res.get('p-id')
        
      }
    })

    this._ProudctsService.productdetails(this.productid).subscribe({
      next:(res)=>{
        this.productdetails = res.data
        console.log(res)
      },
      error:(err)=>{console.log(err);
      }

    })

    
   
  }

  getCart(productId:string) {

    this._CartService.addCarts(productId).subscribe({
      next:(res)=>{console.log(res)},
      error:(err)=>{console.log(err);
      }
    })

  }
}