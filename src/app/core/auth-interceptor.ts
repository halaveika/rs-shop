import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ServerShopService } from '@core/services/server-shop.service';
import { Observable } from 'rxjs';
import { TOKEN } from '@app/shared/constansts';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public serverShopService: ServerShopService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem(TOKEN)){
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
      }
    });}
    return next.handle(request);
  }
}
