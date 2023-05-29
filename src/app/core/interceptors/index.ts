import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HandleErrorInterceptor } from "./handle-error.interceptor";
import { LoaderInterceptor } from "./loader.interceptor";
import { TokenInterceptor } from "./token.interceptor";

export const interceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },
];