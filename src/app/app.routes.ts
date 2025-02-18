import { CheckoutComponent } from './components/checkout/checkout.component';
import { authGuard } from './core/guards/auth.guard';

import { Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { MainComponent } from './layout/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandComponent } from './components/brand/brand.component';
import { CartComponent } from './components/cart/cart.component';
import { ProuductdetailsComponent } from './components/prouductdetails/prouductdetails.component';
import { AllordersComponent } from './components/allorders/allorders.component';


export const routes: Routes = [

  
  {path:"" , component:AuthComponent , children:[
    {path:'' , redirectTo:"login" , pathMatch:'full'},
    {path:"login" , component:LoginComponent , title:"login"},
    {path:"Register" , component:RegisterComponent , title:"Register"},
  ]},
  {path:"" , component:MainComponent , canActivate:[authGuard] , children:[
    {path:'' , redirectTo:"home" , pathMatch:'full'},
    {path:"home" , component:HomeComponent , title:'home'},
    {path:"product" , component:ProductComponent , title:"product"},
    {path:"categories" , component:CategoriesComponent , title:"categories"},
    {path:"brand" , component:BrandComponent , title:"brand"},
    {path:"allorders" , component:AllordersComponent , title:"All orders"},
    {path:"cart" , component:CartComponent , title:"cart"},
    {path:"Prouductdetails/:p-id" , component:ProuductdetailsComponent, title:"details"},
    {path:"checkout/:cart_id" , component:CheckoutComponent, title:"check-out"},
  ]},
  {path:"**" , component:NotfoundComponent ,title:'ERROR 404'}
  




];
