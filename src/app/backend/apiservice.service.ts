import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private API_KEY= 'https://my-json-server.typicode.com/jaykittiwat/skdemo/list'
  constructor(private httpClient: HttpClient) { }
  public getRequest_shotkeys(){
    return  this.httpClient.get(this.API_KEY);
   }
}
