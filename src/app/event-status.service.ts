import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { EventStatus, ResponseResult } from './models';

@Injectable({
  providedIn: 'root'
})
export class EventStatusService {

  baseUrl = "http://localhost:8080/";
  apiUrl = this.baseUrl + "/v1/eventStatus";

  constructor(private http: HttpClient) { }

  getEventStatus():Observable<EventStatus[]>{
    return this.http.get<EventStatus[]>(this.apiUrl)
  }
/*
  createEventStatus(eventStatus: EventStatus): Observable<any>{
    return this.http.post(this.apiUrl,eventStatus,{observe:'response'}).map(res=>res.status)
  }*/
  
  getEventStatusById(pid: string): Observable<EventStatus> {
    return this.http.get<EventStatus>(this.apiUrl + "/" + pid)
  }
}
