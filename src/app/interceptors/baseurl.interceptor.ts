import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const baseurlInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedReq = req.clone({
    url: `${environment.baseUrl}${req.url}`,
  });
  return next(clonedReq);
};
