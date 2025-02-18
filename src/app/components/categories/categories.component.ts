import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../servies6/categories.service';
import { Subscription } from 'rxjs';
import { Icategories } from '../../core/interface/icategories';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  categData:Icategories[]=[];
  categId!:Icategories;
  
  
  constructor(private _CategoriesService:CategoriesService){}
  
    ngOnInit(): void {
  
      if(typeof localStorage != 'undefined'){
        localStorage.setItem('currentpage' , '/categories')}
  
  this.getCategories()
    }
  
  
    getCategories(){
      
  
      this._CategoriesService.getallcategrios().subscribe({
        next:((data)=>{
          console.log(data.data);
          this.categData = data.data;
          
  
        }),
    
      })
    }
  
    allCategId(id:string){
      
      this._CategoriesService.getCategoriesId(id).subscribe({
        next:((data)=>{
          console.log(data);
          this.categId=data.data
          
  
        }),
  
      })
  
    }
}
