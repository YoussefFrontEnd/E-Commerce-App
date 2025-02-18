import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrandService } from '../../servies6/brand.service';
import { Subscription } from 'rxjs';
import { Ibarnd } from '../../core/interface/ibarnd';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [   SearchPipe ,FormsModule ,UpperCasePipe ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

  constructor(private _BrandService:BrandService){}
  allBrands:Ibarnd[]=[];
  brandsId!:any;
  brand:any = null;
  
  

ngOnInit(): void {

  if(typeof localStorage != 'undefined'){
    localStorage.setItem('currentpage' , '/brands')}

this.getAllBrands()
}

getAllBrands(){
  
  this._BrandService.getAllBrands().subscribe({
    next:((data)=>{
      console.log(data.data);
      this.allBrands = data.data;

    }),

  })
}

getBrandsId(id:string){
 
  this._BrandService.getBrandsId(id).subscribe({
    next:((data)=>{
      console.log(data.data);
      this.brandsId = data.data;

    }),
 
  })
}

romove(brand:any){
  if(brand !==0){
    brand=true
    this.brandsId=false
  }else{
    brand=false
    this.brandsId=true
  }


}




}
