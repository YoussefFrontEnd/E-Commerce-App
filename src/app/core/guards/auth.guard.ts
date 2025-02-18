
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {

   let _Router =  inject(Router)
   let _auth = inject(AuthService)
   let _PLATFORM_ID = inject(PLATFORM_ID)



  if(isPlatformBrowser(PLATFORM_ID))
  {
    if(localStorage.getItem("token")){
      _auth.saveduser()
      return true;
       
      }
     else{
       _Router.navigate(['/login'])
       return false
     }
  }
  else if(isPlatformBrowser(PLATFORM_ID)){
    return true
  }
  else{
    return true
  }
 
};
