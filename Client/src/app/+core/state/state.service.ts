import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from 'src/app/+shared/configuration/app-configuration';
import { Observable } from 'rxjs/internal/Observable';
import { State } from 'src/app/+shared/models/state';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../+shared/error-handler/error-handler';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('StateService');
  }

  /** GET heroes from the server */
  getState(): Observable<State[]> {
    return this.http.get<State[]>(AppConfiguration.baseUrl + 'getAllState')
      .pipe(
        catchError(this.handleError('getState', []))
      );
  }
}
