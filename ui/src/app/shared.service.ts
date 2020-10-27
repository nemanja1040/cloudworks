import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://18.237.137.70/api';
  readonly MediaUrl = 'http://18.237.137.70/media';

  constructor(private http:HttpClient) {}

  getTestSessionList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/test_session/');
  }

  addTestSession(val:any){
    return this.http.post(this.APIUrl + '/test_session/', val);
  }

  getTestResultList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/test_result/');
  }
}
