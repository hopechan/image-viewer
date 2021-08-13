import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

export interface Earth {
  date: string,
  url: string,
  id: string,
}

@Injectable({
  providedIn: 'root'
})

export class EarthService {

  private requestUrl: string = "";

  constructor(private http: HttpClient){}

  getData(data: any): Observable<Earth> {
    this.requestUrl = `${environment.apiUrl}/earth/assets?lon=${data.lon}&lat=${data.lat}&date=${data.date}&&dim=${data.dim}&api_key=${environment.apiKey}`;
    const image = this.http.get<Earth>(this.requestUrl);
    return image;
  }
}
