import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { Result } from 'src/app/+shared/models/result';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('ResultService');
  }

  /** GET heroes from the server */
  getResult(): Observable<Result[]> {
    return this.http.get<Result[]>(AppConfiguration.baseUrl + 'getAllResult')
      .pipe(
        catchError(this.handleError('getResult', []))
      );
  }
}
