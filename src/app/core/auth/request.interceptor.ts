import { TokenService } from './../token/token.service';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
        | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

            if(this.tokenService.hasToken()) {
                const token = this.tokenService.getToken();
                req = req.clone({
                    setHeaders : {
                        'x-access-token': token!
                    }
                });
            }
        return next.handle(req);

    }
}
