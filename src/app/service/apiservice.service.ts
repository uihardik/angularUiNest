import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
    apiURL: any = "http://localhost:3000/";
    constructor(private http: HttpClient){

    }
    public getUserDetail() {
        return this.http.get(this.apiURL+'users').pipe(
        map(res => res)
        );
      }
      
      public findUser() {
        return this.http.post(this.apiURL+'findUser',{"id":2}).pipe(
        map(res => res)
        );
      }
}