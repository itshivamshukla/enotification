import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Noticeboard } from 'src/app/+shared/models/noticeboard';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class NoticeboardService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('NoticeboardService');
  }

  /** GET heroes from the server */
  getNoticeboard(): Observable<Noticeboard[]> {
    return this.http.get<Noticeboard[]>(AppConfiguration.baseUrl + 'getAllNoticeBoard')
      .pipe(
        catchError(this.handleError('getNoticeboard', []))
      );
  }
}
