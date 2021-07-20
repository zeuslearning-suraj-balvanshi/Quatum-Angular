import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IAlert, ICourse, INotification } from '../shared/interfaces';

@Injectable()
export class DataService {
  baseUrl: string = 'assets/json/';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.http
      .get<ICourse[]>(this.baseUrl + 'courses.json')
      .pipe(catchError(this.handleError));
  }

  getNotifications(): Observable<INotification[]> {
    return this.http
      .get<INotification[]>(this.baseUrl + 'notifications.json')
      .pipe(catchError(this.handleError));
  }

  getAlerts(): Observable<IAlert[]> {
    return this.http
      .get<IAlert[]>(this.baseUrl + 'alerts.json')
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.Message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
