import {
  HttpClient
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string;
  

  constructor(private http: HttpClient) {
    const config = environment.api || ({} as any);
    this.baseUrl = config.url;
  }

  public getUrl(endpoint) {
    return this.baseUrl + (endpoint || ''); 
  }

  //SERVICE CRUD
  public get(endpoint, options?) {
    return this.http.get(this.getUrl(endpoint), options);  
  }

  public post(endpoint, body?, options?) {
    return this.http.post(this.getUrl(endpoint), body, options);  
  }
  
  public put(endpoint, body?, options?) {
    return this.http.put(this.getUrl(endpoint), body, options);  
  }

  public delete(endpoint, options?) {
    return this.http.delete(this.getUrl(endpoint), options);  
  }

}