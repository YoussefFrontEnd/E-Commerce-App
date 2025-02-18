import { error } from 'console';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const resErrorInterceptor: HttpInterceptorFn = (req, next) => {

  let _ToastrService =inject(ToastrService)
  return next(req).pipe(
    catchError((error)=>{
      console.log('form interceptor' , error.error.message);
      _ToastrService.error(error.error.message , 'FreshCart')
      return throwError( ()=> error)
      
    })
  );
};
