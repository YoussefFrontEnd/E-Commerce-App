import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, PLATFORM_ID } from '@angular/core';

export const reqHeaderInterceptor: HttpInterceptorFn = (req, next) => {

  const _PLATFORM_ID=inject(PLATFORM_ID)

  if(isPlatformBrowser(PLATFORM_ID)){

    if(req.url.includes('cart') || req.url.includes('wishlist') ||req.url.includes('orders')){
      if(localStorage.getItem('token') !=null){
        req = req.clone({
          setHeaders:{token:localStorage.getItem('token')!}
        })
      }
    }
  }






  return next(req);
};
